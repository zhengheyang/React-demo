import React, {Component} from 'react';
import footBg from './logo_bottom.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={footBg} width="302px" alt="logo" />
                <div className="flex-box">
                    <div>服务条款</div>
                    <div>隐私政策</div>
                    <div>加入我们</div>
                    <div>联系我们</div>
                    <div>广告主支持</div>
                    <div>开发者支持</div>
                </div>
                <p>COPYRIGHT &copy; CENTRIXLINK 2017</p>
            </footer>
        );
    }
}

export default Footer;