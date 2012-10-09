<?php
/* Compile LESS */
require "less/lessc.inc.php";
$less = new lessc;
file_put_contents('css/bootstrap.css',$less->compileFile("less/bootstrap.less"));
/* Include templates */

switch($_SERVER['REQUEST_URI'])
{
	case "/profile":
		include 'templates/_layoutProfile.php';
		break;
	case "/annonce":
		include 'templates/_layoutAnnonce.php';
		break;
	default :
		include 'templates/_layout.php';
		break;
}