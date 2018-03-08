<?php 
	$upload = "public/upload/cv-dangminhdat.pdf";
	$file = fopen($upload,"rb");

	header('Content-type: application/octet-stream');
	header('Content-disposition: attachment; filename="cv-dangminhdat.pdf"');
	header('Content-length: '.filesize($upload));

	fpassthru($file);	//đọc file và echo
	fclose($file);
?>