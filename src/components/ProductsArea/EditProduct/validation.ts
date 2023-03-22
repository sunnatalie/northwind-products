export default {
    
    name:{
        required:{value:true,message:"missing name"}, // if the name is required, then the value is true or false.
        minLength:{value:3,message:"name too short"},
        maxLength:{value:30,message:"name too long"}
    },
    stock:{
        required:{value:true,message:"missing stock"}, 
        min:{value:0,message:"too few"},
        max:{value:100,message:"too many"}
    },
    price:{
        required:{value:true,message:"missing price"}, 
        min:{value:0,message:"please enter a valid price"},
        max:{value:1000,message:`price can't exceed 1000`}
    }
}

// const validation = {

// }
// export getValidationByFieldName = () => {
//     return validation[fieldName];
// }

// can add: look in comments on vladi's version
