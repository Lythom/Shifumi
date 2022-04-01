import React from 'react';
import logo from './logo.svg';
import ButtonCommencer from './Assets/Bouton/Commencer/Basic.svg';
import './App.css';
import Background from "./Components/Background";
import Colors from "./Colors";

function Rules() {
    return <div style={{flex: 'initial', width: 224, height: 420, borderRadius: 20, backgroundColor: Colors.BackgroundL}}>
        <div style={{width: 204, height: 35, margin: 10, paddingTop: 5, borderRadius: 20, backgroundColor: Colors.BackgroundXL}}>
            <span className="title">Règles du jeu</span>
        </div>
    </div>;
}

function Game() {
    return <div style={{flex: 'initial', width: 710, height: 420, borderRadius: 20, marginLeft: 20, marginRight: 20, backgroundColor: Colors.BackgroundL}}></div>;
}
function History() {
    return <div style={{flex: 'initial', width: 224, height: 420, borderRadius: 20, backgroundColor: Colors.BackgroundL}}></div>;
}

function Title() {
    return <div style={{width: 710, margin: "auto", marginTop: 40}}>
        <svg width="151" height="28" viewBox="0 0 151 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5948 27.432C8.14675 27.432 6.03475 26.784 4.25875 25.488C2.50675 24.168 1.24675 22.356 0.47875 20.052L5.37475 18.216C5.95075 19.44 6.70675 20.424 7.64275 21.168C8.57875 21.888 9.61075 22.248 10.7388 22.248C11.9148 22.248 12.8388 22.032 13.5108 21.6C14.1828 21.144 14.5188 20.496 14.5188 19.656C14.5188 19.104 14.2668 18.612 13.7628 18.18C13.2828 17.748 12.7668 17.436 12.2148 17.244C11.6868 17.028 10.8588 16.74 9.73075 16.38C8.98675 16.14 8.42275 15.96 8.03875 15.84C7.67875 15.696 7.15075 15.48 6.45475 15.192C5.75875 14.904 5.23075 14.64 4.87075 14.4C4.51075 14.16 4.07875 13.836 3.57475 13.428C3.07075 13.02 2.68675 12.6 2.42275 12.168C2.18275 11.712 1.96675 11.172 1.77475 10.548C1.58275 9.9 1.48675 9.216 1.48675 8.496C1.48675 6.48 2.27875 4.788 3.86275 3.42C5.44675 2.052 7.59475 1.368 10.3068 1.368C12.5628 1.368 14.4588 1.956 15.9948 3.132C17.5308 4.308 18.5508 5.82 19.0547 7.668L14.1588 9.252C13.3668 7.452 11.9868 6.552 10.0188 6.552C7.97875 6.552 6.95875 7.236 6.95875 8.604C6.95875 8.916 7.05475 9.192 7.24675 9.432C7.43875 9.672 7.78675 9.912 8.29075 10.152C8.79475 10.392 9.20275 10.572 9.51475 10.692C9.85075 10.812 10.4268 11.016 11.2428 11.304C12.1068 11.592 12.7668 11.82 13.2228 11.988C13.7028 12.156 14.3508 12.42 15.1668 12.78C15.9828 13.116 16.6188 13.488 17.0748 13.896C17.5548 14.28 18.0468 14.748 18.5508 15.3C19.0548 15.852 19.4148 16.5 19.6308 17.244C19.8708 17.988 19.9908 18.804 19.9908 19.692C19.9908 22.068 19.1028 23.952 17.3268 25.344C15.5508 26.736 13.3068 27.432 10.5948 27.432ZM24.2781 27V3.42L29.4981 1.008V10.296C30.6741 8.88 32.3421 8.172 34.5021 8.172C36.2061 8.172 37.6941 8.712 38.9661 9.792C40.2381 10.872 40.8741 12.624 40.8741 15.048V27H35.6541V17.136C35.6541 15.768 35.4261 14.772 34.9701 14.148C34.5381 13.524 33.7941 13.212 32.7381 13.212C30.5781 13.212 29.4981 14.496 29.4981 17.064V27H24.2781ZM48.7742 6.84C47.9582 6.84 47.2502 6.552 46.6502 5.976C46.0502 5.376 45.7502 4.668 45.7502 3.852C45.7502 3.036 46.0382 2.34 46.6142 1.764C47.2142 1.188 47.9342 0.899999 48.7742 0.899999C49.6142 0.899999 50.3222 1.188 50.8982 1.764C51.4742 2.316 51.7622 3.012 51.7622 3.852C51.7622 4.668 51.4742 5.376 50.8982 5.976C50.3222 6.552 49.6142 6.84 48.7742 6.84ZM46.1462 27V8.604H51.3662V27H46.1462ZM63.0257 13.176V27H57.8057V13.176H55.3577V8.604H57.8057V5.868C57.8057 2.868 59.3777 1.368 62.5217 1.368C64.2737 1.368 65.7257 1.68 66.8777 2.304V6.516C65.8697 6.108 64.9937 5.904 64.2497 5.904C63.4337 5.904 63.0257 6.252 63.0257 6.948V8.604H66.8777V13.176H63.0257ZM81.5288 27V25.308C80.3768 26.724 78.6968 27.432 76.4888 27.432C75.7448 27.432 75.0248 27.312 74.3288 27.072C73.6328 26.856 72.9608 26.496 72.3128 25.992C71.6648 25.488 71.1368 24.768 70.7288 23.832C70.3448 22.896 70.1528 21.804 70.1528 20.556V8.604H75.3728V18.18C75.3728 19.644 75.5888 20.712 76.0208 21.384C76.4528 22.056 77.2208 22.392 78.3248 22.392C79.4288 22.392 80.2328 22.056 80.7368 21.384C81.2648 20.712 81.5288 19.668 81.5288 18.252V8.604H86.7488V27H81.5288ZM113.765 27V17.496C113.765 15.888 113.573 14.772 113.189 14.148C112.805 13.524 112.121 13.212 111.137 13.212C110.009 13.212 109.229 13.524 108.797 14.148C108.389 14.748 108.185 15.816 108.185 17.352V27H102.965V17.496C102.965 15.888 102.773 14.772 102.389 14.148C102.005 13.524 101.321 13.212 100.337 13.212C99.2088 13.212 98.4288 13.524 97.9968 14.148C97.5888 14.748 97.3848 15.816 97.3848 17.352V27H92.1648V8.604H97.3848V10.296C98.5368 8.88 99.9408 8.172 101.597 8.172C103.853 8.172 105.389 9.024 106.205 10.728C107.453 9.024 109.373 8.172 111.965 8.172C114.197 8.172 115.925 8.724 117.149 9.828C118.373 10.932 118.985 12.864 118.985 15.624V27H113.765ZM126.856 6.84C126.04 6.84 125.332 6.552 124.732 5.976C124.132 5.376 123.832 4.668 123.832 3.852C123.832 3.036 124.12 2.34 124.696 1.764C125.296 1.188 126.016 0.899999 126.856 0.899999C127.696 0.899999 128.404 1.188 128.98 1.764C129.556 2.316 129.844 3.012 129.844 3.852C129.844 4.668 129.556 5.376 128.98 5.976C128.404 6.552 127.696 6.84 126.856 6.84ZM124.228 27V8.604H129.448V27H124.228ZM145.457 20.052L144.449 9.576V1.368H149.669V9.576L148.661 20.052H145.457ZM149.453 26.46C148.805 27.108 148.001 27.432 147.041 27.432C146.081 27.432 145.289 27.12 144.665 26.496C144.041 25.848 143.729 25.056 143.729 24.12C143.729 23.184 144.041 22.392 144.665 21.744C145.289 21.096 146.081 20.772 147.041 20.772C148.001 20.772 148.805 21.096 149.453 21.744C150.125 22.392 150.461 23.184 150.461 24.12C150.461 25.032 150.125 25.812 149.453 26.46Z"
                fill="#C6CFFF"/>
        </svg>
    </div>;
}

function Scores() {
    return <div className="scores" style={{display: "inline-block", width: 710, height: 60, marginTop: 90}}>
        Scores
    </div>
}

function App() {
  return (
    <div className="App">

        <Background>
            <Title/>
            <Scores/>
            <div className="midArea" style={{display: "flex", margin: 'auto', width: 1280}}>
                <Rules/>
                <Game/>
                <History/>
            </div>
            <div className="buttons">

            </div>

        </Background>
    </div>
  );
}

export default App;
