export async function saveSubscription (
    subscriptionId: string,
    customerId: string,
) {
    /* 
        * ( No Stripe, o customerId é equivalente ao stripe_customer_id ). 
      
        
        Buscar o usuario no banco do FaunaDB com id do customerId. 
        - Para fazer uma pesquisa no faunadb com esse parametro de busca, eu 
        preciso criar um novo indice no fauna. 
            Collection: users
            Index: user_by_stripe_customer_id
            terms: data.stripe_customer_id
    */

} 