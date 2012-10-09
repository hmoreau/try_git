<!DOCTYPE html>
<html lang="fr">
  <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shake Your Campus</title>
    <!-- Bootstrap -->
	<link href='http://fonts.googleapis.com/css?family=Nothing+You+Could+Do' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
	<link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
	<style>
      body {
        padding-bottom: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
    </style>
	<!--<link href="css/fullcalendar.css" rel="stylesheet" type="text/css"  /> -->
	<!-- <link href="css/unicorn.main.css" rel="stylesheet" type="text/css" /> -->
	<!-- <link href="css/custom.css" rel="stylesheet" type="text/css" /> -->
	<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>
  <body>
	<div id="global" data-spy="affix" data-offset-top="110">
		<?php include 'header.php'; ?>
		<div class="navbar" id="navbar">	
			<?php include 'navbar.php'; ?>
			<!-- Tab nav -->
			<div class="tabs-below tabs-shake visible-desktop visible-tablet">
				<ul class="nav nav-tabs">
					<li class="active"><a href="#tab1" data-toggle="tab"><i class="icon-user"></i> Mon profil</a></li>
					<li><a href="#tab2" data-toggle="tab"><i class="icon-bookmark"></i> Accueil</a></li>
					<li><a href="#tab3" data-toggle="tab"><i class="icon-road"></i> Covoiturage</a></li>
					<li><a href="#tab4" data-toggle="tab"><i class="icon-home"></i> Logements</a></li>
					<li><a href="#tab5" data-toggle="tab"><i class="icon-shopping-cart"></i> Vente de biens</a></li>
					<li><a href="#tab6" data-toggle="tab"><i class="icon-briefcase"></i> Stages</a></li>
				</ul>
			</div>
			<!-- END Tab nav -->
		</div>
		<div class="tabbable"  id="generalcontent">
			<!-- Content -->
			<div class="tab-content content">
				<div class="tab-pane active" id="tab1">
					<?php include 'profile.php'; ?>
				</div>
				<div class="tab-pane" id="tab2">
					<?php include 'home.php'; ?>
				</div>
				<div class="tab-pane" id="tab3">
					<?php include 'covoiturage.php'; ?>
				</div>
				<div class="tab-pane" id="tab4">
					<?php include 'logement.php'; ?>
				</div>
				<div class="tab-pane" id="tab5">
					<?php include 'sells.php'; ?>
				</div>
				<div class="tab-pane" id="tab6">
					<?php include 'stages.php'; ?>
				</div>
			</div>
			<!-- END Content -->
			<div id="visible-phone" class="visible-phone"></div>
			<div id="visible-tablet" class="visible-tablet"></div>
			<div id="visible-desktop" class="visible-desktop"></div>
		</div>
	</div>
    <script type='text/javascript' src="js/jquery.min.js"></script>
	<script type='text/javascript' src='js/fullcalendar.js'></script>
    <script type='text/javascript' src="js/bootstrap.js"></script>
	<script type='text/javascript' src="js/syc.js"></script>
  </body>
</html>