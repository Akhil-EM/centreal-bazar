import React from 'react';                      
import './Home.css';                 
import homePage from '../../services/homePageService'           
import {imageUrlBase} from '../../config'; 
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import BrandCard from '../../components/BrandCard';
// import './owl.css';                                           
class Home extends React.Component {
    constructor(){
      super();
      this.state={
        MainBanners:[],
        MobileMainBanners:[],
        TopCategories:[],
        Promo21:[],
        Promo31:[],
        PromoFull:[],
        MobilePromoFull:[],
        DailyShop1:[],
        DailyShop2:[],
        PopupBanner:[],
        deviceWidth:0,
        TopCategoryList:[],
        PopularProductList:[],
        BrandList:[],
        DealOfDayList:[],
        MainBannersDisplay:'',
        MobileMainBannerDisplay:'none',
        responsive:{
          0: {
              items: 1,
          },
          450: {
              items: 2,
          },
          600: {
              items: 3,
          },
          1000: {
              items: 5,
          },
      
        },
     }
      
    }
    componentWillMount(){
      this.fetchHomeProducts();
      this.fetchTopCategory();
      this.fetchDealOfTheDay();
      this.popularProduct();
      this.brandListFetch();

      if(window.screen.width<750){
        this.setState({MainBannersDisplay:'none',MobileMainBannerDisplay:''});
      }
    }
    // homeProducts
    fetchHomeProducts=()=>{
        homePage.homeProducts(1,'centrealkochi',null)
                  .then((response)=>{
                     let serverData=response.data.Data;
                      this.setState({
                          MainBanners:serverData.MainBanners,
                          MobileMainBanners:serverData.MobileMainBanners,
                          TopCategories:serverData.TopCategories,
                          Promo21:serverData.Promo21,
                          Promo31:serverData.Promo31,
                          PromoFull:serverData.PromoFull,
                          MobilePromoFull:serverData.MobilePromoFull,
                          DailyShop1:serverData.DailyShop1,
                          DailyShop2:serverData.DailyShop2,
                          PopupBanner:serverData.PopupBanner,
                      })
                      //console.log(this.state.MainBanners)
                  }).catch((err)=>{
                     console.log(err)
                  });
         
    }

    fetchTopCategory=()=>{
      homePage.topCategory(1,'centrealkochi',null)
               .then((response)=>{
                  this.setState({TopCategoryList:response.data.Data})
                  //console.log(this.state.TopCategoryList);
               }).catch((err)=>{
                  console.log(err)
               })
    }

    fetchDealOfTheDay=()=>{
      homePage.dealOfTheDay(1,'centrealkochi',null)
               .then((response)=>{
                  // console.log(response);
                   this.setState({DealOfDayList:response.data.Data});
                  
               }).catch((err)=>{
                  console.log(err)
               })
    }

    popularProduct=()=>{
       homePage.popularProduct(1,'centrealkochi',null)
                .then((response)=>{
                    ///console.log(response.data.Data)
                  this.setState({PopularProductList:response.data.Data});
                }).catch((err)=>{
                    console.log(err);
                });
    }
    
    brandListFetch=()=>{
      homePage.BrandList(1,'centrealkochi',null)
      .then((response)=>{
          ///console.log(response.data.Data)
        this.setState({BrandList:response.data.Data});
      }).catch((err)=>{
          console.log(err);
      });
    }


    render() { 
         //console.log(this.state.PopularProductList);
      return (                                      
              <div className="Home" >
                  
                  {
                    this.state.MainBanners.length && (
                    <div className='container-fluid' style={{display:this.state.MainBannersDisplay}}>   
                      <OwlCarousel  autoPl style={{width:'100vw'}} className='owl-theme' center={false} items={1} loop={true} margin={0} dots={false} nav={true}>
                       {
                         this.state.MainBanners.map((item,key)=>(
                           <div key={key} className='item'>
                              <img src={imageUrlBase+item.imageUrl} alt={item.urlKey} ></img>
                          </div>
                         ))
                       }
      
      
                      </OwlCarousel>
                      
                     </div>
                     
                    )
                    
                  }
                  {
                    this.state.MobileMainBanners.length && (
                      <div className='container-fluid' style={{display:this.state.MobileMainBannerDisplay}}>   
                        <OwlCarousel className='owl-theme' autoPlay={true} center={false} items={1} loop={true} margin={0} dots={false} nav={true}>
                         {
                           this.state.MobileMainBanners.map((item,key)=>(
                             <div key={key} className='item'>
                                <img src={imageUrlBase+item.imageUrl} alt={item.elementName} ></img>
                            </div>
                           ))
                         }
        
        
                        </OwlCarousel>
                        
                       </div>
                       
                      )

                  }
                 <h3>SHOP FROM TOP CATEGORIES</h3>
                 <hr></hr>
                 {
                     this.state.TopCategoryList.length && (
                      <div className='container-fluid' >   
                        <OwlCarousel className='owl-theme' margin={10} items={4} loop={false} dots={false} nav={true}>
                         {
                           this.state.TopCategoryList.map((item,key)=>(
                             <div key={key} className='item text-center'>
                                <img src={imageUrlBase+item.imageUrl} alt={item.elementName} ></img>
                                <a style={{textDecoration:'none',color:'black'}} href={item.catName}>{item.catName}</a>
                            </div>
                           ))
                         }        
                        </OwlCarousel>
                        
                       </div>
                       
                      )
                 }
                 <h3>HOT DEALS</h3>
                 <hr></hr>
                 {
                      this.state.DealOfDayList.length && (
                        <div className='container-fluid' >   
                          <OwlCarousel className='owl-theme'  responsive={this.state.responsive}  loop={false} margin={10} dots={false} nav={false}>
                           {
                             this.state.DealOfDayList.map((item,key)=>(
                               <ProductCard price={item.unitPrice} name={item.prName} imgurl={item.imageUrl} alt={item.urlKey} key={key}/>
                             ))
                           }        
                          </OwlCarousel>
                          
                         </div>
                         
                        )
                  }
                 <br/>
                 <br/>
                 {
                     this.state.Promo21.length && (
                      <div className='container-fluid' >   
                        <OwlCarousel className='owl-theme' items={2} loop={false} margin={10} dots={false} nav={false}>
                         {
                           this.state.Promo21.map((item,key)=>(
                             <div key={key} className='item text-center'>
                                <img src={imageUrlBase+item.imageUrl} alt={item.elementName} ></img>
                                <a href={item.catName}>{item.catName}</a>
                            </div>
                           ))
                         }        
                        </OwlCarousel>
                        
                       </div>
                       
                      )
                      
                     
                  }
                 <br></br>
                 <div className="text-center">
                    <h3 >BEST SELLERS</h3>
                    <div className="border-container">
                      <p className='green-border'>SO YOU GET ME TO KNOW ME BETTER</p>
                    </div>
                    <hr></hr>
                 </div>
                 {
                      this.state.PopularProductList.length && (
                        <div className='container-fluid' >   
                          <OwlCarousel className='owl-theme'  responsive={this.state.responsive}  loop={false} margin={10} dots={false} nav={false}>
                           {
                             this.state.PopularProductList.map((item,key)=>(
                               <ProductCard price={item.unitPrice} name={item.prName} imgurl={item.imageUrl} alt={item.urlKey} key={key}/>
                             ))
                           }        
                          </OwlCarousel>
                          
                         </div>
                         
                        )
                  }
                  <br/>
                  <h3>DAILY SHOPPING</h3>
                  <hr></hr>
                  {
                     this.state.DailyShop2.length && (
                      <div className='container-fluid' >   
                        <OwlCarousel className='owl-theme' items={2} loop={false} margin={10} dots={false} nav={false}>
                         {
                           this.state.DailyShop2.map((item,key)=>(
                             <div key={key} className='item text-center'>
                                <img src={imageUrlBase+item.imageUrl} alt={item.elementName} ></img>
                                <a href={item.catName}>{item.catName}</a>
                            </div>
                           ))
                         }        
                        </OwlCarousel>
                        
                       </div>
                       
                      )
                      
                     
                  }
                  <br/>
                  <h3>TRENDING BRANDS</h3>
                  <hr></hr>
                  {
                        this.state.BrandList.length && (
                          <div className='container-fluid' >   
                            <OwlCarousel className='owl-theme' responsive={this.state.responsive} loop={false} margin={10} dots={false} nav={false}>
                             {
                               this.state.BrandList.map((item,key)=>(
                                 <div>
                                  
                                    <BrandCard key={key} image={item.imageUrl} altr={item.attrValue}/>
                                 </div>
                                 
                               ))
                             }        
                            </OwlCarousel>
                            
                           </div>
                           
                          )
                  }
                  <br></br>
                  <br></br>
                  
              </div>                              
        );                                          
    }                                              
 }                                              
                                                
                                                
export default Home;                 
