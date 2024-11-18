package Sandip12.email.c;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import Sandip12.email.e.entity;
import Sandip12.email.s.service;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;

@RestController
@CrossOrigin
public class Email {

	@Autowired
	private service service;

	@GetMapping("/")
	public String show() {
		return "Email";
	}

	@PostMapping("/sendEmail")
	public ResponseEntity<?> sendEmail(@RequestParam String to, @RequestParam String subject,
			@RequestParam String message, @RequestParam MultipartFile[] files)
			throws MessagingException, IOException {

			// Send email with files attached
			service.sendEmail(to, subject, message, files);

			return ResponseEntity.ok("Email sent successfully!");



	}

	@PostMapping("/send")
	public ResponseEntity<?> sendemail(@RequestBody entity res) throws MessagingException {

	
			this.service.sendEmail(res.getTo(), res.getSubject(), res.getMessage());

			return ResponseEntity.ok("Sended...");

	}

}
