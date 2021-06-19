import http from '../@axios';

class homePage{
    homeProducts(){
        return http.get('Products/HomeProducts')
    }
    topCategory(){
         return http.get('category/TopCategory');
    }
  
}



export default new homePage;