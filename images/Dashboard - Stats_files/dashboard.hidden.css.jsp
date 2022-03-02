<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="robots" content="noindex"/>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js"></script>
<link type="text/css" rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/themes/base/jquery-ui.css" />
<script type="text/javascript" src="/editor/login/login.js"></script>
    <script type="text/javascript" src="/editor/scripts/dm.fbconnect.js"></script>
    <script type="text/javascript"
            src="/common/scripts/dm.trackstats.jsp?v=2022-03-02T13_57_18"></script>

    <title>Login to edit your site</title>

    <script type="text/javascript" src="/editor/nee/utils/placeholder/placeholder.js"></script>
<script>
	$(function(){
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        // Check if the browser is IE explorer 9
        if (msie > 0 && ua.substring(msie + 5, ua.indexOf(".", msie)) === "9"){
			$('body').addClass('lt-ie10')
			var $pwd = $('#pwd'),
				$email = $('#email');
				$confirmPwd = $('#confirm-pwd');
			$pwd = $pwd.length > 0 ? $pwd : $('#j_password');
			$('input').placeholder();
			$pwd[0].type="text";
			if ($confirmPwd.length > 0){
				$confirmPwd[0].type="text";
			}
		}
	});
</script><link type="text/css" rel="stylesheet" href="/editor/direct/css/template.css"/>


    <style>
  :root {
   --header-color: #343539;  --header-border-color: #242527;  --backgroundColor: #f7f7f7;  --loginButtonHoverColor: rgb(228,91,87);  --logo-url: none;  --visible-button-hover-color: rgb(214,85,81);  --backgroundImage: none;  --text-on-button: #ffffff;  --link-color: #8c8c8c;  --button-visible-font-color: #ffffff;  --text-on-dark: ;  --header-text-color: #ffffff;  --oneDevicesFontIconColor: #343539;  --button-color: #ec5e5a;  --button-hover-color: #F86F4C;  --text-on-light: #686868; 
  }
</style>

<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport'/>
<link type="text/css" rel="stylesheet"
      href="/editor/stylesheets/wl.login.colors.css?version=2022-03-02T13_57_18"/>
<link type="text/css" rel="stylesheet" href="/editor/stylesheets/static/pt/login/wl.login.css"/>
<LINK REL="SHORTCUT ICON" HREF="/editor/product/reseller/images/favicon_one_reseller.ico">
<!-- Fonts Include -->
<script>
    function loadCSS(link) {
        try {
            var urlParams = new URLSearchParams(window.location.search);
            var noCSS = !!urlParams.get('nocss');
            var cssTimeout = urlParams.get('cssTimeout') || 0;

            if (noCSS) {
                return;
            }
            requestIdleCallback(function () {
                window.setTimeout(function () {
                    link.onload = null;
                    link.rel = 'stylesheet';
                    link.type = 'text/css'
                }, parseInt(cssTimeout, 10));
            });
        } catch (e) {/* Never fail - this is just a tool for measurements */}
    }
</script>
<link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=Merriweather:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Abril+Fatface:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Alef:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Alfa+Slab+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Alike:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Allura:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Amaranth:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Amatic+SC:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Amiko:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Antic+Didone:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Anton:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Arvo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Bad+Script:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Belgrano:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Bree+Serif:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Butcherman:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cabin:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cairo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cardo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Contrail+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cookie:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Courgette:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Creepster:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Crete+Round:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=Crimson+Text:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Dancing+Script:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Droid+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Droid+Serif:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Duru+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Eater:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|EB+Garamond:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Exo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Exo+2:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Fjalla+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Flamenco:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Fugaz+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Glegoo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Gloria+Hallelujah:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Great+Vibes:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Gudea:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Inconsolata:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Indie+Flower:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Josefin+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Josefin+Slab:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Jura:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Lato:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Libre+Baskerville:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Lobster:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=Lobster+Two:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Lora:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Lusitana:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Mate+SC:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Maven+Pro:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Mogra:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Monoton:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Montserrat:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Nosifer:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Noto+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Old+Standard+TT:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Open+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Open+Sans+Condensed:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Oswald:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Oxygen:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Pacifico:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Patua+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Paytone+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Permanent+Marker:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Play:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Playball:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Playfair+Display:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Poiret+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Prociono:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=PT+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|PT+Serif:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Puritan:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Quattrocento:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Racing+Sans+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Raleway:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Roboto:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Roboto+Condensed:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Roboto+Slab:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Rokkitt:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Sanchez:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Shrikhand:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Signika:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Slabo+13px:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Slabo+27px:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Source+Sans+Pro:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Spinnaker:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Stalemate:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Teko:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Titillium+Web:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Ubuntu:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Ubuntu+Mono:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|UnifrakturMaguntia:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Varela+Round:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=Vollkorn:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Yanone+Kaffeesatz:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Yesteryear:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Julius+Sans+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Palanquin:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Asap:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Istok+Web:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Muli:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Nunito:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Quicksand:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Work+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Enriqueta:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Special+Elite:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Petit+Formal+Script:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Parisienne:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Poppins:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Alegreya:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Archivo+Narrow:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Arimo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Bitter:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Catamaran:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Caudex:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Codystar:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cuprum:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=Dynalight:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Emblema+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Itim:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Karla:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Laila:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Merienda:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Noticia+Text:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Noto+Serif:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Overlock:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Plaster:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Quattrocento+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Satisfy:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Titan+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Questrial:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cinzel:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Abel:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Roboto+Mono:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Francois+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Hind:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Merriweather+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Comfortaa:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Ubuntu+Condensed:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Acme:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|PT+Sans+Narrow:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=Passion+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Heebo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Fira+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Dosis:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|ABeeZee:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Alegreya+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Londrina+Sketch:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Nobile:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Mada:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Oranienbaum:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Fredoka+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Prata:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Vidaloka:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cabin+Sketch:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Montserrat+Alternates:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Zilla+Slab:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Ovo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Unna:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Sail:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Chelsea+Market:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cutive+Mono:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Wire+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Rye:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Elsie:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=Rozha+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Droid+Sans+Mono:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Alice:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Delius:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Domine:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Handlee:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Kameron:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Kreon:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Marmelad:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Molengo:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Philosopher:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Pinyon+Script:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Poly:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Reenie+Beanie:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Rosario:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Sofia:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Tangerine:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Volkhov:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Sorts+Mill+Goudy:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Assistant:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Rubik:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Varela:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|DM+Serif+Text:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|DM+Sans:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=Barlow:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Be+Vietnam:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Biryani:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Darker+Grotesque:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Lexend+Deca:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Manjari:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|DM+Serif+Display:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Stardos+Stencil:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Staatliches:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Yeseva+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Libre+Caslon+Text:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Overpass:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Bebas+Neue:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Sen:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Inter:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Lateef:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Amiri:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|El+Messiri:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Harmattan:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Tajawal:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Almarai:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Markazi+Text:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Scheherazade:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Mirza:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="preload" href="https://irp.cdn-website.com/fonts/css?family=Katibeh:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cedarville+Cursive:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Give+You+Glory:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Gothic+A1:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Jost:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Homemade+Apple:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Ramabhadra:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Shadows+Into+Light:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Space+Mono:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Spartan:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Sulphur+Point:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Alata:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Krona+One:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Rock+Salt:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Lacquer:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Epilogue:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Sacramento:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Bevan:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Cormorant+Garamond:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Averia+Serif+Libre:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic&amp;subset=latin-ext&amp;display=swap"  as="style" importance="low" onload="loadCSS(this)" /><link rel="stylesheet" type="text/css" href="https://static.cdn-website.com/mnlt/production/2341/_dm/s/rt/dist/css/css-font-package.min.css" />
<link type="text/css" rel="stylesheet" href="/_dm/s/rt/css/font-icons/wl-fonts/nee.dmfonts.css"/>
<style id="wlCustomCss">
    @import url('https://fonts.googleapis.com/css?family=Oswald:400,500');

#mainContent .dashboardPanelHeader, #siteSelectListWrapper .dashboardPanelHeader {
	font-family: 'Oswald', sans-serif;
  font-weight: 400;
}

#mainContent #siteList #listTitle>div, #mainContent #siteList .listTitle>div, #mainContent .siteSelectList #listTitle>div, #mainContent .siteSelectList .listTitle>div, #siteSelectListWrapper #siteList #listTitle>div, #siteSelectListWrapper #siteList .listTitle>div, #siteSelectListWrapper .siteSelectList #listTitle>div, #siteSelectListWrapper .siteSelectList .listTitle>div {
	font-family: 'Oswald', sans-serif;
  font-weight: 400;
}

/* Login Page */

.wlLogin .logoWrapper {
	height: auto;
  padding: 0;
}

.wlLogin .wlLoginBtn {
	font-size: 14px;
  padding: 12px 20px;
  line-height: 1;
}

.wlLogin {
	background: #343539;
}

.wlLogin .wlLoginWrapper h1 {
	display: none;
}

.wlLogin .wlLoginWrapper h3 {
	text-align: center;
  margin-bottom: 3rem;
  text-transform: capitalize;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  display: none;
}

.wlLogin .wlLoginForm {
	box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
  border: none;
  padding: 40px;
  height: 279px;
}

.wlLogin .wlHeader {
	border-bottom: none;
  height: 80px;
  background: transparent !important;
}

.wlLogin .wlTitle {
	color: #686868 !important;
}

.wlLogin .logoImg {
	margin: 4rem auto;
  height: 85px;
  width: auto;
}

/* Preview */
.onePreviewBody {
    background-color: #f7f7f7;
}

#editorSettingsTopBar {
    background: #2c3234;
    border-bottom: none;
    height: 50px;
}

#Wrapper .devicesType-wrapper, #Wrapper[data-device=all] .devicesType-wrapper, #Wrapper[data-device=desktop] .devicesType-wrapper, #Wrapper[data-device=mobile] .devicesType-wrapper, #Wrapper[data-device=tablet] .devicesType-wrapper {
    height: 50px;
}

.onePreviewBody #editorSettingsTopBar a.layoutIcon {
    color: #aaaaaa;
    fill: #aaaaaa;
}

#editorSettingsTopBar a.layoutIcon:not(.active):hover {
    background-color: #000000;
}

.onePreviewBody #editorSettingsTopBar a.layoutIcon.active {
    background-color: #f7f7f7;
    color: #333333;
    fill: #333333;
}

/* Dashboard */
#navigationWrapper {
    background: #2c3234;
    border-bottom: none;
}

#navigationWrapper #navigation li:not(.subnav-item):not(.language-option) {
    border-left: 1px solid #111111;
}

#navigationWrapper #navigation li:not(.subnav-item):not(.language-option) > a {
    color: #dddddd;
}

#navigationHeader .subnav .language-list li:first-child {
    display: block !important;
}

#mainContent #sitesListWarper .dashboardHeaderSection, #siteSelectListWrapper #sitesListWarper .dashboardHeaderSection {
    margin-top: 2.5rem;
}

#siteList {
  margin-top: 2.5rem;
}

#navigationHeader #logo {
    height: 40px;
}

#mainContent {
	box-shadow: inset 0 1px 15px 1px rgba(0,0,0,0.1);
}

#listTitle .title {
	text-transform: none;
    font-size: 20px;
}

#mainContent #siteList #theList .siteName, #mainContent #siteList #theSelectList .siteName, #mainContent .siteSelectList #theList .siteName, #mainContent .siteSelectList #theSelectList .siteName, #siteSelectListWrapper #siteList #theList .siteName, #siteSelectListWrapper #siteList #theSelectList .siteName, #siteSelectListWrapper .siteSelectList #theList .siteName, #siteSelectListWrapper .siteSelectList #theSelectList .siteName {
	font-size: 1.2rem;
  line-height: 1;
}

#mainContent #siteList #theList .siteLine, #mainContent #siteList #theSelectList .siteLine, #mainContent .siteSelectList #theList .siteLine, #mainContent .siteSelectList #theSelectList .siteLine, #siteSelectListWrapper #siteList #theList .siteLine, #siteSelectListWrapper #siteList #theSelectList .siteLine, #siteSelectListWrapper .siteSelectList #theList .siteLine, #siteSelectListWrapper .siteSelectList #theSelectList .siteLine {
	border: 1px solid #e7e7e7;
}

#mainContent .pagination, #mainContent #paymentsPagination, #siteSelectListWrapper .pagination, #siteSelectListWrapper #paymentsPagination {
	border: 1px solid #e7e7e7;
  background: #ffffff;
  height: 50px;
  padding: 12px 0;
  border-radius: 0 0 4px 4px;
  border-top: 0;
}

#mainContent #siteList #listTitle, #mainContent #siteList .listTitle, #mainContent .siteSelectList #listTitle, #mainContent .siteSelectList .listTitle, #siteSelectListWrapper #siteList #listTitle, #siteSelectListWrapper #siteList .listTitle, #siteSelectListWrapper .siteSelectList #listTitle, #siteSelectListWrapper .siteSelectList .listTitle {
	background-color: #f0f0f0;
  border: 1px solid #e7e7e7;
  border-radius: 4px 4px 0 0;
}

/* Editor */

#headerLogoLink {
    margin: 5px 10px !important;
    background-size: contain !important;
    background-position: 0 50% !important;
    background-repeat: no-repeat !important;
}

.editorBody #edLeftPanel svg {
	color: #ec5e5a;
}

/*.editorBody .withPanels #edTopBar, .editorBody .TopBar-main-3mh, .editorBody .TopBar-main-3w4 {
	height: 75px;
}8?

/*.editorBody #headerLogoLink {
	height: 43px;
  margin-top: 16px;
  margin-left: 24px;
}*/

/*.editorBody #edTopBar #headerLogoLink {
	background-image: url(https://cdn.musethemes.com/files/logo-light.png) !important;
}*/

/*.editorBody #edTopBar, .editorBody .TopBar-main-3mh, .TopBar-main-3x1, .TopBarDropdown-dropdown-2x1 .Select-control, .TopBarDeviceNavigation-main-1x1 .TopBarDeviceNavigation-short--x1, .ContextMenu-titleWrapper-3x1, .editorBody .TopBarDeviceNavigation-main-1mh .TopBarDeviceNavigation-short--mh, .editorBody .TopBarDropdown-dropdown-2mh .Select-control, .editorBody .TopBar-main-3w4, .editorBody .TopBarDropdown-dropdown-2w4 .Select-control, .editorBody .TopBarDeviceNavigation-main-1w4 .TopBarDeviceNavigation-short--w4 {
	background-color: #303135;
}

.editorBody .contextMenu .contextMenuInner>div.titleContainer.header>.title, .editorBody .contextMenu .contextMenuInner>div.titleContainer, #publishFlow #publishTitle, #popupPageType.noTabsSelection .addSinglePanel, #popupWinExampleMask.Pages .popupWinExample .closeThis {
  background-color: #303135;
}*/

/*.DarkHeaderPopup-header-3mh, #edTopBar .Select-menu-outer {
  background-color: #303135;
}

.editorBody .WidgetWrapper-header-3mh, .editorBody .ContextMenu-titleWrapper-3mh {
  background: #303135;
}

.editorBody .WidgetTitle-main-emh {
  background: #303135;
}*/

/*.editorBody .WidgetWrapper-openEditor-gmh, .editorBody .WidgetWrapper-close-1mh, .editorBody .WidgetWrapper-help-Fmh, .editorBody .WidgetWrapper-contextMenu-1mh, .editorBody .WidgetTitle-main-emh, .editorBody .WidgetWrapper-header-3mh {
  border-color: #444444;
}

.editorBody .TopBarDropdown-main-3mh, .editorBody .TopBarDeviceNavigation-main-1mh, .editorBody .TopBarButton-main-2mh, .editorBody .TopBarButton-main-2mh.TopBarButton-left-border-3mh, .editorBody .TopBarPublish-main-5mh {
  border-color: #222;
}

#edTopBar .Select-menu-outer {
  border-color: #222;
}*/

/*.editorBody .WidgetContextMenu-icon-2mh {
  color: #aaaaaa;
}*/

/* .editorBody .TopBarButton-main-2mh:hover, .editorBody .TopBarDropdown-dropdown-2mh .Select-control:hover, .editorBody .TopBarDropdown-dropdown-2w4 .Select-control:hover .editorBody .WidgetWrapper-current-1mh, .editorBody .TopBarButton-main-2w4:hover {
  background-color: #3c3d42; */
}

/* #edTopBar .Select-option.is-focused {
  background-color: #3c3d42 !important;
}*/

/* Editor Preview */
#previewWrapper {
  background: #efefef;
}

.onePreviewBody #editorSettingsTopBar .logo, #topHeader .logo {
  /*background-image: url(https://cdn.musethemes.com/files/sitemodify-dark.svg) !important;*/
}

#topHeader .logoWrapper {
	width: 250px !important;
}

#userInfo .subnav li:first-child {
	display: none !important;
}

.wlAskResetPwd ::-webkit-input-placeholder, .wlLogin ::-webkit-input-placeholder { /* WebKit browsers */
   color: transparent;
}
.wlAskResetPwd :-moz-placeholder, .wlLogin :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: transparent;
}
.wlAskResetPwd ::-moz-placeholder, .wlLogin ::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: transparent;
}
.wlAskResetPwd :-ms-input-placeholder, .wlLogin :-ms-input-placeholder { /* Internet Explorer 10+ */
   color: transparent;
}
.wlInputs {
 position: relative;
}
.wlAskResetPwd .dm-iconenvelope::before, .wlLogin .dm-iconenvelope::before {
	content: "\e006";
}

.wlAskResetPwd h1 {text-align: center; margin-bottom: 2rem;}

.wlAskResetPwd h4 {display: none;}

div[class*="SiteUrl-container-"] hr + div {
  display: none;
}

.dashboardBody .userHelp.mainnav-item {
	display: none !important;
}

.promo-cp {
	display: none !important;
}

[data-auto="menu-siteexport"] {
  display: none !important;
}

#PreviewPaneWrapper[device="all"] .PreviewPaneInnerWrapper {
  top: initial !important;
  bottom: 10% !important;
  transform-origin: bottom left !important;
}

/* Stats */

#mainContent #dashboardAppWrapper[current-parent-route="stats"] .stats-nav-wrapper {
    background-color: #eaeaea;
}

#mainContent #dashboardAppWrapper .navbar-inverse {
    background-color: #eaeaea;
}

/* New Dashboard */
/*.custom-css-top-bar {
	background: #2c3234 !important;
    border-bottom: none !important;
}

.custom-css-top-bar-sites, .custom-css-top-bar-stats, .custom-css-top-bar-user, .custom-css-top-bar-help {
	border-left: 1px solid #111111 !important;
}*/

.custom-css-top-bar-help {
	display: none !important;
}

/*.custom-css-top-bar .custom-css-top-bar-sites > a,.custom-css-top-bar .custom-css-top-bar-stats > a,.custom-css-top-bar .custom-css-top-bar-user > a,.custom-css-top-bar .custom-css-top-bar-help > a, .custom-css-top-bar .custom-css-top-bar-user > label {
	color: #dddddd;
}*/

.custom-css-top-bar-account {
	display: none !important;
}

.wlLoginWrapper iframe, .wlLoginWrapper #orText {
  display: none !important;
}

.customPublishPopup {
    background-color: rgba(52,53,57,0.9);
}

.customPublishPopup .freestylePopupBody {
    box-shadow: 0 1px 8px rgba(0,0,0,0.3),0 5px 15px rgba(0,0,0,0.15);
}

.customPublishPopup .Flex-main-131, .customPublishPopup iframe {
    height: 725px !important;
}</style>
<link type="text/css" rel="stylesheet" href="/editor/direct/css/dm.fbconnect.css"/>

    <!-- add IE specific css for the editor and analytics -->
    <!--[if IE 7]>
    <link type="text/css" rel="stylesheet" href="css/Editor_IE7.css"/>
    <link type="text/css" rel="stylesheet" href="css/sharingStyles_IE7.css">

    <![endif]-->
    <!--[if IE 8]>
    <link type="text/css" rel="stylesheet" href="css/Editor_IE.css"/>
    <![endif]-->

    <script type="text/javascript">
        window.dCurrentScreen = 'login';

        function fbConnectDone(fbLogin) {
            if (fbLogin && fbLogin.ok)
                window.location = fbLogin.redirectTo;
        }

        $(document).ready(function () {
            $('#j_username').focus();
            $("#dmLodinForm").keyup(function (event) {
                if (event.keyCode == 13) {
                    $(this).submit();
                }
            });
            window.localStorage.removeItem("ED_ONBOARDING");
            window.localStorage.removeItem("TOUR");
        });
    </script>

    <script src='https://www.google.com/recaptcha/api.js' async defer></script>

    <script type="text/javascript">
        function captchaCallback(token) {
            $('form.lgForm').submit();
        }
    </script>

    </head>


<body class="wlLogin loginBody ">
	
	<div class="wlHeader coloredHeader">
		<div class="logoWrapper">
		<div class="logoImg"></div>
	</div>
</div>
	<div class="wlInnerBody">
		<div class="wlLoginWrapper">
			<h1 class="wlTitle">Welcome</h1>
			<h3 class="wlTitle">Login to edit your site</h3>

			<div class="login_error" style="padding-top: 7px; padding-bottom: 7px;"></div>

			<script src="https://apis.google.com/js/platform.js"></script>
<div style="display: inline">
    <style>
        iframe {
            width: 403px;
        }

        .separator {
            display: flex;
            align-items: center;
            text-align: center;
            margin-bottom: 15px;
        }
        .separator::before, .separator::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #A4A8AA;
        }
        .separator::before {
            margin-right: .3em;
        }
        .separator::after {
            margin-left: .3em;
        }

        #orText{
            font-size: 14px;
            color: #A4A8AA;
        }

        .wlLoginWrapper .login_error, .signupBox .login_error {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            color: #e41e1e;
            font-size: 14px;
            font-weight: 600;
            margin: 0;
        }

        .signupBox {
            width: 388px;
        }

        .wlLoginWrapper {
            width: 388px;
        }

        @media only screen and (max-width: 568px) {
            iframe {
                width: 315px !important;
            }
            .signupBox {
                width: 300px !important;
            }

            .wlLoginWrapper {
                width: 300px !important;
                margin-left: auto;
                margin-right: auto;
            }

            .wlTitle {
                padding: 0;
            }

            .wlLoginBtn {
                padding: 5px 25px;
            }
        }

    </style>
    <iframe  id="gmailLogin"src="https://ws.push-notifs.com/login/gmailLogin?version=production_2341"
             style="border: 0; overflow:hidden; height: 70px;margin: 0 auto 0;display: block;margin-left: -8px;"></iframe>
    <span id="orText" class="separator">OR</span>
</div>
<script>
  function gmailLogin(res){
    data = res.data
    if (!data || data.source!=="gmail"){
      return;
    }
   let rememberMeElem = document.getElementById("remember_me")
    if (rememberMeElem){
      var rememberMe = rememberMeElem.value;
    }
    var url = "/login?g_token=" + data.id_token + "&remember-me=" + rememberMe;
    fetch(url, {method: 'POST', mode: 'no-cors'})
    .then(response => {
      var errorElement = document.getElementsByClassName("login_error")[0];
      console.log(response)
      if (response.redirected) {
        location.assign(response.url);
        errorElement.innerText = "";
      } else if (response.status == 0){
        location.assign(url);
      } else {
        errorElement.innerText="This account couldn’t be found.  ".replace('%s', data.basicProfile.email)
      }
    })
    .catch(function (err) {
      console.info(err);
    });
  }
  window.addEventListener("message", gmailLogin, false);

</script>
<form class="wlLoginForm lgForm" action='/login' method='post'>
				<div class="wlInputs">
					<input 	class="textField" 
							type="text"
							name="j_username"
							id="j_username"
							placeholder="Email"
							value=""/>
					<span class="dm-iconenvelope"></span>
					<div class="pwdSectionWrapper">
						<div class="pwdWrapper">
							<input 	class="textField" 
									type="password"
									name='j_password'
									id='j_password'
									placeholder="Password"/>
							<span class="dm-iconlock"></span>
						</div>
					</div>	
				</div>
				<div class="wlLoginError">
	                </div>
				<hr/>
				<div class="wlLoginBottomForm">
					<div class="wlPasswordOps">
						<div>
							<input type="checkbox" id="remember_me" name="remember-me"/>
							<label for="remember_me">
								<span class="dm-iconcheckbox_small"></span>Remember me</label>
                        </div>
						<a class="loginForgotLink coloredLink" href="/login/askresetpwd?lang=en">Forgot Password?</a>
					</div>
					<input type="submit" class="wlLoginBtn coloredButton  g-recaptcha " 
				        data-sitekey="6LeiWB8UAAAAAHYnVJM7_-7ap6bXCUNGiv7bBPME" data-callback='captchaCallback'   
				       value="Login"/>
				</div>
			</form>

		</div>
	</div>
	<!-- WL Custom Html Begin -->
<script type="text/javascript">
$(function() {
    var currentView = window.dCurrentScreen;
    var logoSelector = getSelector(currentView) || false;
    var accountName = window.dm_account_name;
    var cookie = getCookie('woc_duda_username');

    // Remove the default WOCode logo
    $(logoSelector).css('background-image', '');

    if(typeof accountName === 'string') {
        // Set cookie with username and expiration date of 1 year
        var cookieDate = new Date();
        cookieDate.setFullYear(cookieDate.getFullYear() + 1);
        document.cookie = 'woc_duda_username=' + accountName + '; expires=' + cookieDate.toGMTString() + '; max-age=31536000; path=/';

        // Get logo url from the server and load it
        getLogoUrl(accountName);
    } else {
        // Check if we have stored username in the cookie and load the logo url from the server
        if(typeof cookie === 'string') {
            getLogoUrl(cookie);
        }
    }

    // Request logo from the server
    function getLogoUrl(accountName) {
        var requestLogoURL = 'https://app.wocode.com/';
        $.ajax({
            method: 'POST',
            url: requestLogoURL,
            data: { command: 'get_custom_logo', duda_account_name: accountName }
        })
        .done(function(logoURL) {
            var waitForLogo = setInterval(function() {
                if($(logoSelector).length > 0) {
                    clearInterval(waitForLogo);
                    $(logoSelector).attr('style', "display: block !important; background-image: url(\'" + logoURL + "\') !important;");
                }
            }, 100);
        });
    }

    // Get the logo selector for the current view
    function getSelector(currentView) {
        var selector;

        switch(currentView) {
            case 'login':
                selector = '.logoWrapper .logoImg';
                break;
            case 'dashboard':
                selector = '#navigationHeader #logo';
                break;
            case 'editor':
                selector = '#edTopBar #headerLogoLink';
                break;
            case 'preview':
                selector = '#editorSettingsTopBar .logo';
                break;
            case 'passwordReset':
                selector = '.logoWrapper .logoImg';
                break;
        }

        return selector;
    }

    // Get cookie
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
});

// Catch 'closePurchaseOverlay' Message Event
window.onmessage = function(event) {
  if (event.data === 'closePurchaseOverlay') {
    location.reload();
  }
};
</script><!-- WL Custom Html End -->

</body>
</html>



