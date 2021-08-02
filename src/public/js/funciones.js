//primero seleccionamos el elemento on el que vamos a trabajar
/*document es una variable que representa toda la web*/
//redy-> metodo o accion para indicar que vamos a empezar a 
//trabajar con jQuery
jQuery(document).ready(listo);

function listo()
{
	//selecciono elemento por la clase que tiene
	//para que cdo se hace click haga lo que dice la funcion anonima
	//e-> representa la accion en si ene una variable
	//la accion normal de un a esque me lleve al href, aca quiero que haga otra cosa y no eso
	//para que pase algo distinto tengo que usar 'e.preventDefault()'
	jQuery(".hamb").click(function(e){
		//anulo el funcionamiento normal dél "a"
		e.preventDefault();
		//selecciono el nav
		//si este elemento tiene la clase 'open' la saca
		//y si no la tiene la agrega
		jQuery("header .container nav").toggleClass("open");
		jQuery(".hamb i").toggleClass("fa-times");
	});

	
	jQuery("header .container nav a").click(function(){
		//cuando hago click sobre el a remuevo la clase
		//para que saque la 'x' y se cierre el menu
		jQuery("header .container nav").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");

		//this -> hace referencia al elemento que estoy haciendo click
		//attr-> obtengo el valor del atributo ('href' en este caso)
		var dev=jQuery(this).attr("href");

		jQuery("html,body").animate({
			//trabajo con la propiedad scrollTop
			//necesito seleccionar donde esta ubicado 
			//el elemento que tiene como id el vaor que recupere
			//del a que presione

			//offset->indica el valor desde el punto top:0 
			//hasta la seccion que queremos ir (nos da su valor)
			//puede tener valor top o left
			//al valor que devuelve le resto el alto del menu 
			//para que se posicione justo sobre la seccion
			"scrollTop": jQuery(dev).offset().top -76
		})
	});
}