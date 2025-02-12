import {ref} from 'vue'

export function useCounter(){

    // attributes 
    const count = ref(0) // Reactive State

    // method
    const increment = () => count.value++; 
    const decrement = () => count.value--; 
    const multiple = () => count.value *= 2; 
    const devided = () => count.value /= 2; 

    return {count , increment , decrement , multiple , devided}

}

