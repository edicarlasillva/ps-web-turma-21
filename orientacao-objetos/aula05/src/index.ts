import { User } from './models/User'
import { Product } from './models/Product'
import { DiscountedProduct } from './models/DiscountedProduct'

import { ProductType } from './types'

// Cenário 1: Criando usuários
const user1 = new User('Alice', 'alice123', 'alice@example.com')
const user2 = new User('Bob', 'bob456', 'bob@example.com')

// Cenário 2: Criando produtos
const product1 = new Product('Camiseta', 50, ProductType.Clothes)
const product2 = new Product('Tênis', 150, ProductType.Shoes)
const product3 = new Product('Cama', 1000, ProductType.Home)

// Cenário 3: Adicionando produtos ao carrinho de um usuário
user1.addToCart(product1)
user1.addToCart(product2)
user2.addToCart(product3)

// Exibindo os produtos no carrinho do usuário 1
console.log('Produtos no carrinho de Alice:')
console.log(user1.showProducts()) // Deve mostrar camisetas e tênis

// Cenário 4: Removendo um produto do carrinho
user1.removeFromCart(product1) // Remove a camiseta

// Exibindo os produtos no carrinho do usuário 1 após a remoção
console.log('Produtos no carrinho de Alice após remover a camiseta:')
user1.showProducts() // Deve mostrar apenas o tênis

// Cenário 5: Adicionando comentários a produtos
product1.addComment('Ótima qualidade', user1)
product2.addComment('Confortável e bonito.', user2)
product3.addComment('Excelente cama, dormi muito bem!', user1)

// Exibindo comentários do produto 2
console.log("Comentários do produto 'Tênis':")
product2.showComments() // Deve mostrar comentários sobre o tênis

// Exibindo o produto 1
console.log("Detalhes do produto 'Camiseta':")
console.log(product1.show()) // Deve mostrar detalhes da camiseta e seus comentários

// Exibindo o produto 3
console.log("Detalhes do produto 'Cama':")
console.log(product3.show()) // Deve mostrar detalhes da cama e seus comentários

// Cenário 6: Convertendo objetos para JSON
console.log('User1 em formato JSON:', user1.toJson())
console.log('Product1 em formato JSON:', product1.toJson())

// Cenário 7: Adicionando avaliação
product1.addRate(5, user1)
product1.addRate(3, user2)

// Cenário 8: Adicionando desconto
const discountedProduct = new DiscountedProduct('Notebook', 5000, 10)
console.log(discountedProduct.show())
