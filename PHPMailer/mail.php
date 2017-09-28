<?php

	$site_owners_email = 'example@example.com'; // Replace this with your own email address
	$site_owners_name = 'Example'; // replace with your name

	// Assign Variables
	$subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
	$username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
	$email  = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
	$cell_phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
	$msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

	// Import PHPMailer classes into the global namespace
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	// include autoload.php
	require_once 'vendor/autoload.php';

	$mail = new PHPMailer(true);
	try {
		//Recipients
		$mail->setFrom($email, $username);
		$mail->addAddress($site_owners_email, $site_owners_name);     // Add a recipient

		//Content
		$mail->isHTML(true);                                  // Set email format to HTML
		$mail->Subject = 'Here is the subject';
		$mail->Body    = '<b>Sender Phone:</b> '. $cell_phone .'<br/><b>Sender E-mail:</b> '. $email . '<br/><br/><b>Sender Message:</b><br/>' . $msg. '<br/><b>Sender Subject:</b> '.$subject;

		$mail->send();
		echo 'Message has been sent';
	} catch (Exception $e) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	}