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

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    console.log("a: " + a + " b: " + b + " a-b: " + (a-b))
    console.log(points)
    return a - b
});
// for (let a=0;a<points.length;a++){
//     for (let b=a+1;b<points.length;b++){
//         let pA=points[a];
//         let pB=points[b];
//         let temp=pA;
//         if (pA>pB){
//             points[a]=pB;
//             points[b]=temp;
//         }
//     }
// }
console.log(points)
