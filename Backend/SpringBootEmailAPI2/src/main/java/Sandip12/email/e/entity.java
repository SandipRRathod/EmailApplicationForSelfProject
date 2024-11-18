package Sandip12.email.e;

import java.io.File;

public class entity {
	private String to ;
	private String subject;
	private String message;
	private File file;


	public File getFile() {
		return file;
	}
	public void setFile(File file) {
		this.file = file;
	}
	
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public entity() {
		super();
		// TODO Auto-generated constructor stub
	}


	@Override
	public String toString() {
		return "Gmail [to=" + to + ", subject=" + subject + ", message=" + message + ", file=" + file + "]";
	}
	
	

}
