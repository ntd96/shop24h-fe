
const initialState = {
    cart: [],
    numbercart: 0,

    alert_: {
        status: false,
        severity: '',
        message: ''
    },
    toTop: false
}

const StateEvent = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART': {
            let check = false;
            state.cart.map((element, index) => {
                if (element._id === action.payload.cart._id) {
                    //Check trùng Id thì trả ra quantity ++
                    state.cart[index].quantity++
                    return check = true;
                }
            })
            if (!check) {
                { state.cart.push(action.payload.cart) } // Còn nếu không trùng Id thì add cái mới vào
            }
            return {
                ...state,
                numbercart: state.numbercart + 1 // Number tự động tăng lên 1 khi addCart thành công
            }
        }
        case 'DECREASE_QUANTITY': {
            state.cart.map((element, index) => {
                if (element._id === action.payload.cart._id) {
                    //Ta xét điều kiện nếu quanity > 1 thì mới trừ, còn nhỏ hơn thì ngưng
                    if (state.cart[index].quantity > 1) {
                        state.cart[index].quantity-- // Quanity giảm khi click giảm
                        state.numbercart-- // Numbercart-- khi click giảm đi
                    }
                }
            })
            return {
                ...state,
            }
        }
        case 'DELETE_CART': {

           // Tạo biến chứa index element muốn xóa sau khi findIndex ogn
            const delete_index = state.cart.findIndex((element) => {
                return element._id == action.payload.cart._id
            })
             // Tạo biến chứa Element muốn xóa numbercart sau khi filter Element đó ra
            const delete_element = state.cart.filter((element) => {
                return element._id == action.payload.cart._id
            })

            // Xóa number Element đó, mặc định nó nằm 0
            state.numbercart = state.numbercart - delete_element[0].quantity
            state.cart.splice(delete_index, 1)
            return {
                ...state,
            }
        }
        case 'ALERT': {
            return {
                ...state,
                alert_: action.payload.alert_
            }
        }
        case 'TOTOP_SCROLL': {
            return {
                ...state,
                toTop: action.payload.toTop
            }
        }
        default: {
            return state;
        }
    }

}

export default StateEvent