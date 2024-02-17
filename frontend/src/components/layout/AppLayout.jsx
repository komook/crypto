import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';


export default function AppLayout() {
    const { loading } = useContext(CryptoContext)
    if (loading){
        return <Spin fullscreen/>
    }
    const num = 4
    const el = ['12345']
    let elnew = []
    function dell(num, el){
        
    }
    
    console.log(dell(num))
  
    return(
    <Layout>
        <AppHeader/>
        <Layout>
            <AppSider/>
            <AppContent/>
        </Layout>
   </Layout>
    )
}