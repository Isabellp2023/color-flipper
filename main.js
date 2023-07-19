import './style.css'

const COLOR_PALETTE = {
  "#28262C": "Raisin Black",
  "#998FC7": "Blue Bell",
  "#D4C2FC": "Lavender Blue",
  "#F9F5FF": "Magnolia",
  "#14248A": "Resolution Blue",
  };
  const addOptionsToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");

    Object.entries(COLOR_PALETTE).forEach(([color, name]) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
    })
    }
    
  
  const addEventListenerToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
    const colorName = document.querySelector("#color-name");
    colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    
    colorName.innerText = COLOR_PALETTE[newColor];
    });
    };
    addOptionsToColorPicker();
    addEventListenerToColorPicker();

    

  

    

   
  


  
        

      