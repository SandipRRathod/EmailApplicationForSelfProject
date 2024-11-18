package Sandip12.email.s;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeBodyPart;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.internet.MimeMultipart;

@Service
public class service {
	
	// setting variable for sender orignal gmailand password
	
	private static final String form="142521dip@gmail.com";
	
	private static final String pass="";
	
	// SMTP host configuration
    private static final String host = "smtp.gmail.com";
    private static final String port = "465";
	
    
    //commen properties 
    private Session createMailSession() {
        Properties properties = new Properties();
        properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port", port);
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.ssl.enable", "true");

        return Session.getInstance(properties, new Authenticator() {
            @Override
            protected jakarta.mail.PasswordAuthentication getPasswordAuthentication() {
                return new jakarta.mail.PasswordAuthentication(form, pass);
            }
        });
    }
	
    
  //with attachment
	public void sendEmail(String to, String subject, String message, MultipartFile[] files) throws MessagingException {
		
		Session session = createMailSession();

		MimeMessage m = new MimeMessage(session);

		m.setFrom(form);
		m.addRecipient(Message.RecipientType.TO, new InternetAddress(to = to.trim()));
		m.setSubject(subject);

		
		// for atachment of file or image add parameter of file
		MimeMultipart mimeMultipart = new MimeMultipart();
		
		//setting all parts as seperate like header ,content and attachaments 
		MimeBodyPart fpart = new MimeBodyPart();
		fpart.setText(message); 
        mimeMultipart.addBodyPart(fpart);
		
		try {
			
            if (files != null) {
			for (MultipartFile files2 : files) {
				
				 MimeBodyPart attachmentPart = new MimeBodyPart();

                 // Convert MultipartFile to File
                 File tempFile = new File(System.getProperty("java.io.tmpdir") + "/" + files2.getOriginalFilename());
                 files2.transferTo(tempFile);

                 attachmentPart.attachFile(tempFile); // Attach the file
                 mimeMultipart.addBodyPart(attachmentPart);
				
			}
			
            }
		

		} catch (IOException | MessagingException e) {
			e.printStackTrace();
		}

		
		m.setContent(mimeMultipart);

		Transport.send(m);
	}
	
	
	//without attachment
	public void sendEmail(String to, String subject, String text) throws MessagingException {
	
		        Session session = createMailSession();

				MimeMessage m = new MimeMessage(session);

				m.setFrom(form);
				m.addRecipient(Message.RecipientType.TO, new InternetAddress(to = to.trim()));
				m.setSubject(subject);
			    m.setText(text);
				
				
			    Transport.send(m);
    }

}


