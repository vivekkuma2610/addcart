
function Rating(productrating) {
   
 
 if(productrating.Rating<=0){
     return (
         <div className="Rating" aria-label="Rating 05">
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         </div>
           );
 }
 
 else if(productrating.Rating>0 && productrating.Rating<=1 ){
     return (
         <div className="Rating" aria-label="Rating 05">
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         </div>
           );
 }
 
 else if(productrating.Rating>1 && productrating.Rating<=2 ){
     return (
         <div className="Rating" aria-label="Rating 05">
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         </div>
           );
 }
 
 else if(productrating.Rating>2 && productrating.Rating<=3 ){
     return (
         <div className="Rating" aria-label="Rating 05">
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         </div>
           );
 }
 
 else if(productrating.Rating>3 && productrating.Rating<=4 ){
     return (
         <div className="Rating" aria-label="Rating 05">
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
         </div>
           );
 }
 
 else if(productrating.Rating>4 && productrating.Rating<=5 ){
     return (
         <div className="Rating" aria-label="Rating 05">
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked" ></span>
         </div>
           );
 }
   }
 
 export default Rating