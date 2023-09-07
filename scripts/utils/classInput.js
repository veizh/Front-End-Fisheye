class input {
    constructor(name, type, sentence, placeholder, err, required , reggex) {
      this.name = name;
      this.type = type;
      this.sentence = sentence;
      this.placeholder = placeholder;
      this.err = err;
      this.required = required;
      this.reggex = reggex
      this.input = this.createInput()
      this.label = this.createLabel()
      this.err = this.createErrBalise()
  
    } 
    createErrBalise(){
      let err = document.createElement('div')
      err.innerHTML = this.err
      err.classList.add('invisible',"err")
      return err
  
    }
     createLabel(){
      let label = document.createElement('label')
      label.setAttribute('for',this.name)
      label.innerHTML=this.sentence
      console.log(label);
      return label
    }
     createInput(){
      let input = document.createElement('input')
      input.setAttribute('type',this.type)
      input.setAttribute('name',this.name)
      input.setAttribute('placeholder',this.placeholder)
      input.setAttribute('required',this.required)
      console.log(input);
      return input
    }
    checkValidity(){
      if(!this.reggex.test(this.input.value)){
        console.log("il y'a une erreur");
        this.err.classList.remove('invisible')
        this.input.classList.add('error')
      }
      else{
        this.input.classList.remove('error')
        this.err.classList.add('invisible')
        console.log("pas d'erreure");
      }
    }
    onChangeListener(){
      this.input.addEventListener('blur',(e)=>{
        console.log(this.input.value)
        this.checkValidity()
      })
      this.input.addEventListener('keyup',(e)=>{
        console.log(this.input.value)
        this.checkValidity()
      })
  
    }
  
    createContainer(){
      this.onChangeListener()
      let container= document.createElement('div')
      container.classList.add('container-input')
      container.appendChild(this.label)
      container.appendChild(this.input)
      container.appendChild(this.err)
      return container
    }
    init(parent){
      parent.appendChild(this.createContainer())
    }
  }
  export default input;