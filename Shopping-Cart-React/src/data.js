import Axios from "axios";
// import img1 from './img/oppo.jpg';
// import img2 from './img/realme.jpg';
// import img3 from './img/redmi.jpg';
 let ary; 
 const data = {
   //  productData: [
   //      {
   //         id: 1,
   //         img: img1,
   //         title: 'OPPO',
   //         desc: '',
   //         price: 14999,
   //      },{
   //          id: 2,
   //          img: img2,
   //          title: 'Realme 7 Pro',
   //          desc: '',
   //          price: 18499,
   //       },{
   //          id: 3,
   //          img: img3,
   //          title: 'Redmi',
   //          desc: '',
   //          price: 23599,
   //       }
   //  ],
   productData : [{
      id: 3,
      img: ary.img,
      title: ary.title,
      desc: ary.desc,
      price: ary.price,
   }
   ]
 }


   const getUser = () => {
      Axios({
        method: "GET",
      //   withCredentials: true,
        url: "http://localhost:5000/admin/getProduct",
      }).then((res) => {
      //   setData(res.data);
        console.log(res.data);
      });
    };
     ary = getUser();
    console.log(ary);  

export default data;