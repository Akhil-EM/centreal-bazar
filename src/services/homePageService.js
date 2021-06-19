import http from '../@axios';

class homePage{
    homeProducts(){
        return http.get('Products/HomeProducts')
    }
    topCategory(){
         return http.get('category/TopCategory');
    }
    dealOfTheDay(){
        return http.get('DealOfDay?custId=ai6y3xy&guestId=ai6y3xy&vendorurlkey=centrealkochi')
    }
  
}



export default new homePage;