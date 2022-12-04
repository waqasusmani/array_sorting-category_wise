const products = [
    {
        id: '001', name: 'cocomo', price: 10, status: 'NEW'
    },
    {
        id: '002', name: 'lays', price: 20, status: 'OLD'
    },
    {
        id: '003', name: 'frio', price: 5, status: 'UPDATED'
    },
    {
        id: '004', name: 'kurkure', price: 25, status: 'OLD'
    },
    {
        id: '005', name: 'oreo', price: 50, status: 'NEW'
    },
    {
        id: '005', name: 'oreo', price: 50, status: 'UPDATED'
    }
]


products.sort((a,b)=>{
    let second = a.status=='NEW'?1:a.status=='UPDATED'?2:3
    let first = b.status=='NEW'?1:b.status=='UPDATED'?2:3
    return second - first
})

console.log(products)
