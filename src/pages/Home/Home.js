import React from 'react';                      
import './Home.css';                 
import homePage from '../../services/homePageService'           
import {imageUrlBase} from '../../config'; 
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
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
        MainBannersDisplay:'',
        MobileMainBannerDisplay:'none'
      }
      
    }
    componentWillMount(){
      this.fetchHomeProducts();
      this.fetchTopCategory();

      if(window.screen.width<750){
        this.setState({MainBannersDisplay:'none',MobileMainBannerDisplay:''});
      }
    }
    // homeProducts
    fetchHomeProducts=()=>{
        homePage.homeProducts()
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
      homePage.topCategory()
               .then((response)=>{
                  this.setState({TopCategoryList:response.data.Data})
                  //console.log(this.state.TopCategoryList);
               }).catch((err)=>{
                  console.log(err)
               })
    }



    render() { 
       
      return (                                      
              <div className="Home" > 
                  {
                    this.state.MainBanners.length && (
                    <div className='container-fluid' style={{display:this.state.MainBannersDisplay}}>   
                      <OwlCarousel className='owl-theme' center={false} items={1} loop={true} margin={0} dots={false} nav={true}>
                       {
                         this.state.MainBanners.map((item,key)=>(
                           <div key={key} className='item'>
                              <img src={imageUrlBase+item.imageUrl}></img>
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
                        <OwlCarousel className='owl-theme' center={false} items={1} loop={true} margin={0} dots={false} nav={true}>
                         {
                           this.state.MobileMainBanners.map((item,key)=>(
                             <div key={key} className='item'>
                                <img src={imageUrlBase+item.imageUrl}></img>
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
                        <OwlCarousel className='owl-theme' center={true} items={3} loop={true} margin={10} dots={false} nav={true}>
                         {
                           this.state.TopCategoryList.map((item,key)=>(
                             <div key={key} className='item text-center'>
                                <img src={imageUrlBase+item.imageUrl}></img>
                                <a href={item.catName}>{item.catName}</a>
                            </div>
                           ))
                         }        
                        </OwlCarousel>
                        
                       </div>
                       
                      )
                 }
                 <h3>HOT DEALS</h3>
                 <hr></hr>
              </div>                              
        );                                          
    }                                              
 }                                              
                                                
                                                
export default Home;                 
