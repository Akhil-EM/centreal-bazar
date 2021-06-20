import http from '../@axios';

class homePage{
    homeProducts(_lang,_venderUrlKey,_token){
        return http.get('Products/HomeProducts',{
            headers:{
                lang:_lang,
                vendorurlkey:_venderUrlKey,
                token:_token
            }
        })
    }
    topCategory(_lang,_venderUrlKey,_token){
         return http.get('category/TopCategory',{
             headers:{
                lang:_lang,
                vendorurlkey:_venderUrlKey,
                token:_token
             }
         });
    }

    dealOfTheDay(_lang,_venderUrlKey,_token){
        return http.get('DealOfDay',{
            headers:{
                lang:_lang,
                vendorurlkey:_venderUrlKey,
                token:_token
            },
            params:{
                custId:'',
                guestId:'ai6y3xy'
            }
        })
    }
    
    popularProduct(_lang,_venderUrlKey,_token){
        return http.get('PopularProduct',{
            headers:{
                lang:_lang,
                vendorurlkey:_venderUrlKey,
                token:_token
            },
            params:{
                custId:'',
                guestId:'ai6y3xy'
            }
        })
    }
    
    BrandList(_lang,_venderUrlKey,_token){
        return http.get('BrandList',{
            headers:{
                lang:_lang,
                vendorurlkey:_venderUrlKey,
                token:_token
            },
            params:{
                custId:'',
                guestId:'ai6y3xy'
            }
        })
    }
}



export default new homePage;