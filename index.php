<?php
/* Compile LESS */
require "less/lessc.inc.php";
$less = new lessc;
file_put_contents('css/bootstrap.css',$less->compileFile("less/bootstrap.less"));
/* Include templates */
include 'templates/_layout.php'; ?>