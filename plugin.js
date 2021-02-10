function website(software){
    this.software = software;
    
    //create website
    
   const tag = this.software.tag //string
   const id = this.software.id //string
   const classN = this.software.classN; //string
   const name = this.software.name; //string
   const attr = this.software.attr; //array w/ object
   const def_text = this.software.def_text; //string
   const parent = this.software.parent; //string
   const style = this.software.styles; //array
   const script = this.software.scripts; //array

    if(typeof(tag) !== "string"){
        console.error("tag must be a string");
        return false;
    }
if(typeof(id) !== "string"){
        console.error("id must be a string");
        return false;
    }
    if(typeof(classN) !== "string"){
        console.error("classN must be a string");
        return false;
    }
if(typeof(name) !== "string"){
        console.error("name must be a string");
        return false;
    }
if(!Array.isArray(attr)){
        console.error("attr must be a array");
        return false;
    }
if(!Array.isArray(style)){
      console.error("style must be a array");
        return false;
}
if(!Array.isArray(script)){
      console.error("script must be a array");
        return false;
}

  for(a=0;a<attr.length;a++){ //attr
   for(b=0;b<style.length;b++){ //style
     for(c=0;c<script.length;c++){ //script
         
     let el = document.createElement(tag);
     el.id = id;
     el.className = classN;
     el.name = name;
     el.setAttribute(attr[a].type, attr[a].val);
     el.innerHTML = def_text;
         if(document.querySelector("."+el.className) || document.querySelector("#"+el.id)){
             document.querySelector("."+el.className).setAttribute(attr[a].type, attr[a].val);
             return false;
         }
     document.querySelector(parent).appendChild(el);

     //style
    let link = document.createElement("link");
     link.href=style[b];
     link.rel = "stylesheet";
     link.type="text/css";
     document.querySelector("head").appendChild(link);
    //script
     let source = document.createElement("script");
     source.src=script[c];
     source.type="text/javascript";
     document.querySelector("head").appendChild(source);

     }
   }
  }
   

    }