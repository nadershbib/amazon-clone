export const initialState = {

  basket: [],
  user:null


};

export const getBasketTotal = basket =>{
  return basket?.reduce((amount,item)=>amount+item.price,0);
}



export const reducer = (state,action)=>{

 switch(action.type){

   case "SET_USER":
     return {
       ...state,
       user:action.user,
     }

   case 'ADD_TO_BASKET':
        return {
            ...state,
            basket:[...state.basket,action.item]
        }
       break;
   case 'REMOVE_FROM_BASKET':
         let newBasket = [...state.basket];
         let index = newBasket.findIndex(basketItem=>basketItem.id === action.id);

         if(index >= 0){
           newBasket.splice(index,1);

           return {
             ...state,
             basket:[...newBasket],
           }
         }
         else{
            console.log("error!");
         }
       
       break;
       
   default:
       return state;    

 }



}



