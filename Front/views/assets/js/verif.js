
document.getElementById('form').addEventListener("submit",function(e)
{

   var erreur;
   var Name = document.getElementById("order_id");
   var Mail = document.getElementById("billing_email");
   var Mobile =document.getElementById("mobile");
   var Code =document.getElementById("code");
   var Card = document.getElementById("card");
  // var permis=document.getElementById("permis");

   if (!Name.value)
   {
      erreur="Veuillez renseigner le nom"
   }

   if (!Mail.value)
   {
      erreur="Veuillez renseigner l'adresse e-mail"
   }

   if (!Mobile.value)
   {
      erreur="Veuillez renseigner le date"
   }
   if(!Code.value)
   {
   erreur="Veuillez renseigner le télephone"
   }
   if(!Card.value)
    {
   erreur="Veuillez renseigner le permis"

     }

   if (erreur)
   {
      e.preventDefault();
    //  document.getElementById("erreur").innerHTML = erreur;
      alert("erreur");
      return false;
   }
    else
    {
         alert('formulaire envoye');
    }


});
