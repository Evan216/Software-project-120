// function addItemToCart(title, price, imageSrc){
//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var cartItemNames = cartItems.getElementsByClassName('cart-item-titel')
//     for(var i = 0; i < cartItemNames.length; i++){
//         if (cartItemNames[i].innerText == title) {
//             alert('This item is already added!!')
//             return
//         }
//     }


const Add = ({setClose}) => {
    const [file, setFile] = useState(null);
    const [Title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);
    
//     return (
//         <div className={styles.container}>
//             <div className={styles.item}>
//                 <h1 className={styles.title}>Products</h1>
//                 <table className={styles.table}>
//                     <tbody>
//                         <tr className={styles.trTitle}>
//                         <th>Image</th>
//                         <th>Id</th>
//                         <th>Title</th>
//                         <th>Price</th>
//                         <th>Action</th>
//                         </tr>
//                     </tbody>
//                 {pizzaList.map((product) => (
//                     <tbody key={product._id}>
//                         <tr className={styles.trTitle}>
//                             <td>
//                                 <Image
//                                 src={product.img}
//                                 width={50}
//                                 height={50}
//                                 objectFit="cover"
//                                 alt="" 
//                                 />
//                             </td>
//                             <td>{product._id.slice(0, 5)}...</td>
//                             <td>{product._id.title}</td>
//                             <td>${product.prices[0]}</td>
//                             <td>
//                                 <button className={styles.button}>Edit</button>
//                                 <button className={styles.button}
//                                 onClick={() => handleDelete(product._id)}>
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 ))}
//                 </table>
//                 </div>
//                 <div className={styles.item}>
//                     <h1 className={styles.title}>Order</h1>
//                     <table className={styles.table}>
//                         <tbody>
//                             <tr className={styles.trTitle}>
//                                 <th>Id</th>
//                                 <th>Customer</th>
//                                 <th>Total</th>
//                                 <th>Payment</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </tbody>
//                         {orderList.map((order) => (
//                             <tbody key={order._id}>
//                                 <tr className={styles.trTitle}>
//                                     <td>{order._id.slice(0,5)}...</td>
//                                     <td>{order.customer}</td>
//                                     <td>${order.total}</td>
//                                     <td>
//                                         {order.method === 0 ? <span>cash</span> : <span>paid</span>}
//                                     </td>
//                                     <td>{status[order.status]}</td>
//                                     <td>
//                                         <button onClick={() => handleStatus(order._id)}>\
//                                         Next Stage
//                                         </button>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         ))}
//                     </table>
//                 </div>
//             </div>

//     );
// };



























//                 {/* <span onClick={()=> setClose(true)} className={styles.close}>
//                     X
//                     </span>
//                     <h1>Add New Menu Item</h1>
//                     <div className={styles.item}>
//                       <label className={styles.label}>Choose an Image</label>
//                         <input type="text" onChange={(e) => setTitle(e.target.value)}>
//                         </div>
//                             <div className={styles.item}>
//                                 <label className={styles.label}>Desc</label>
//                                 <textarea
//                                 rows={4}
//                                 type="text"
//                                 onChange={(e) => setDesc(e.target.value)}
//                                 ></textarea>
//                 </input>
//                 </div>
//             </div>
//         </div> 
//     );    
// };

// export default Add  */}