import React from 'react';
import Colors from "../Colors";
import {Highlightable} from "./Icons";


const ScissorsCard: React.FC<Highlightable> = ({highlighted}) => {
    return (
        <svg width="160" height="220" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="220" rx="20" fill="#AD2B2B"/>
            <rect x="2" y="2" width="156" height="212" rx="18" fill="white" stroke="#EB5757" stroke-width="4"/>
            <path d="M43.4435 161.296C44.7235 161.296 45.8435 161.56 46.8035 162.088C47.7635 162.616 48.4995 163.376 49.0115 164.368C49.5395 165.344 49.8035 166.504 49.8035 167.848H47.4515C47.4515 166.456 47.1075 165.376 46.4195 164.608C45.7315 163.824 44.7395 163.432 43.4435 163.432C42.0035 163.432 40.9075 163.88 40.1555 164.776C39.4035 165.656 39.0275 166.96 39.0275 168.688V170.848C39.0275 172.56 39.3955 173.864 40.1315 174.76C40.8675 175.656 41.9555 176.104 43.3955 176.104C44.7395 176.104 45.7635 175.72 46.4675 174.952C47.1875 174.184 47.5475 173.112 47.5475 171.736H49.8035C49.8035 173.064 49.5395 174.216 49.0115 175.192C48.4995 176.168 47.7635 176.92 46.8035 177.448C45.8435 177.976 44.7235 178.24 43.4435 178.24C41.3155 178.24 39.6515 177.592 38.4515 176.296C37.2675 174.984 36.6755 173.168 36.6755 170.848V168.688C36.6755 166.384 37.2675 164.576 38.4515 163.264C39.6515 161.952 41.3155 161.296 43.4435 161.296ZM55.3976 160.72V162.808H53.0456V160.72H55.3976ZM55.3496 165.736V178H53.0936V165.736H55.3496ZM64.0079 165.496C64.9199 165.496 65.7279 165.64 66.4319 165.928C67.1519 166.216 67.7039 166.616 68.0879 167.128C68.4879 167.64 68.6879 168.208 68.6879 168.832L68.6639 169.264H66.4319V169.048C66.4319 167.88 65.5279 167.296 63.7199 167.296C61.9279 167.296 61.0319 167.832 61.0319 168.904C61.0319 169.4 61.2879 169.768 61.7999 170.008C62.3119 170.232 63.0959 170.448 64.1519 170.656C65.1599 170.864 65.9839 171.08 66.6239 171.304C67.2799 171.528 67.8319 171.88 68.2799 172.36C68.7439 172.84 68.9759 173.488 68.9759 174.304C68.9759 175.616 68.5279 176.6 67.6319 177.256C66.7359 177.912 65.4479 178.24 63.7679 178.24H63.4079C62.3999 178.24 61.5199 178.088 60.7679 177.784C60.0159 177.464 59.4319 177.04 59.0159 176.512C58.6159 175.968 58.4239 175.36 58.4399 174.688V174.16H60.6719V174.4C60.6719 175.76 61.8159 176.44 64.1039 176.44C64.7759 176.44 65.3759 176.288 65.9039 175.984C66.4479 175.68 66.7199 175.264 66.7199 174.736C66.7199 174.288 66.5679 173.936 66.2639 173.68C65.9759 173.424 65.6159 173.232 65.1839 173.104C64.7519 172.976 64.1519 172.848 63.3839 172.72C62.3919 172.528 61.5919 172.336 60.9839 172.144C60.3759 171.936 59.8559 171.592 59.4239 171.112C58.9919 170.632 58.7759 169.976 58.7759 169.144C58.7759 168.008 59.2239 167.12 60.1199 166.48C61.0159 165.824 62.2399 165.496 63.7919 165.496H64.0079ZM77.0683 165.496C78.0763 165.496 78.9643 165.712 79.7323 166.144C80.5163 166.56 81.1243 167.16 81.5563 167.944C81.9883 168.728 82.2043 169.64 82.2043 170.68V172.384H73.6363C73.6683 173.68 73.9723 174.68 74.5483 175.384C75.1243 176.088 75.9803 176.44 77.1163 176.44C78.1243 176.44 78.8683 176.144 79.3483 175.552C79.8283 174.96 80.0683 174.256 80.0683 173.44H82.2043C82.2043 174.4 81.9803 175.24 81.5323 175.96C81.1003 176.68 80.4923 177.24 79.7083 177.64C78.9403 178.04 78.0603 178.24 77.0683 178.24H76.9723C75.2443 178.24 73.8763 177.688 72.8683 176.584C71.8763 175.464 71.3803 173.976 71.3803 172.12V171.64C71.3803 170.424 71.6043 169.352 72.0523 168.424C72.5003 167.496 73.1403 166.776 73.9723 166.264C74.8043 165.752 75.7803 165.496 76.9003 165.496H77.0683ZM76.9483 167.296C76.0363 167.296 75.2923 167.576 74.7163 168.136C74.1563 168.696 73.8123 169.528 73.6842 170.632H79.9723V170.344C79.9723 169.432 79.6923 168.696 79.1323 168.136C78.5883 167.576 77.8603 167.296 76.9483 167.296ZM90.3082 165.496C91.9242 165.496 93.1242 165.816 93.9082 166.456C94.7082 167.096 95.1082 168.024 95.1082 169.24V175.6C95.1082 175.888 95.1722 176.104 95.3002 176.248C95.4282 176.376 95.5882 176.44 95.7802 176.44C96.1482 176.44 96.5162 176.328 96.8842 176.104V177.76C96.3402 178.08 95.7242 178.24 95.0362 178.24C94.3482 178.24 93.8362 178.048 93.5002 177.664C93.1642 177.264 92.9802 176.72 92.9482 176.032C91.9562 177.504 90.5242 178.24 88.6522 178.24C87.3082 178.24 86.3002 177.952 85.6282 177.376C84.9722 176.784 84.6442 175.856 84.6442 174.592C84.6442 173.6 84.9002 172.824 85.4122 172.264C85.9242 171.688 86.7722 171.272 87.9562 171.016C89.1402 170.76 90.7722 170.632 92.8522 170.632V169.504C92.8522 168.688 92.6122 168.12 92.1322 167.8C91.6522 167.464 90.9562 167.296 90.0442 167.296C89.1802 167.296 88.5082 167.464 88.0282 167.8C87.5482 168.136 87.3082 168.608 87.3082 169.216V169.504H85.1002C85.0682 169.28 85.0522 169.016 85.0522 168.712C85.0522 168.152 85.2762 167.624 85.7242 167.128C86.1722 166.632 86.7802 166.24 87.5482 165.952C88.3162 165.648 89.1642 165.496 90.0922 165.496H90.3082ZM92.8522 172.384C91.1722 172.384 89.9002 172.472 89.0362 172.648C88.1882 172.808 87.6202 173.056 87.3322 173.392C87.0442 173.728 86.9002 174.192 86.9002 174.784C86.9002 175.888 87.7402 176.44 89.4202 176.44C90.0122 176.44 90.5722 176.296 91.1002 176.008C91.6282 175.704 92.0522 175.28 92.3722 174.736C92.6922 174.192 92.8522 173.568 92.8522 172.864V172.384ZM109.771 175.6C109.771 175.888 109.835 176.104 109.963 176.248C110.091 176.376 110.251 176.44 110.443 176.44C110.795 176.44 111.155 176.328 111.523 176.104V177.76C111.027 178.08 110.523 178.24 110.011 178.24C109.147 178.24 108.539 178.064 108.187 177.712C107.851 177.36 107.667 176.864 107.635 176.224C107.203 176.864 106.643 177.36 105.955 177.712C105.283 178.064 104.507 178.24 103.627 178.24C102.395 178.24 101.379 177.88 100.579 177.16C99.7953 176.424 99.4033 175.368 99.4033 173.992V165.736H101.659V173.584C101.659 175.488 102.523 176.44 104.251 176.44C104.811 176.44 105.339 176.288 105.835 175.984C106.347 175.68 106.755 175.272 107.059 174.76C107.363 174.232 107.515 173.656 107.515 173.032V165.736H109.771V175.6ZM124.175 165.736L119.879 171.64L124.391 178H121.703L118.511 173.512L115.271 178H112.799L117.311 171.784L113.039 165.736H115.727L118.679 169.912L121.703 165.736H124.175Z" fill="#EB5757"/>
            <circle cx="80" cy="85" r="50" fill="#EB5757"/>
            <g clipPath="url(#clip0_764_2916)">
                <path d="M65.3847 86.0465C64.7391 85.401 63.8808 85.0454 62.9678 85.0454C62.0548 85.0454 61.1965 85.401 60.551 86.0465C59.9054 86.692 59.5498 87.5503 59.5498 88.4633C59.5498 89.3763 59.9054 90.2347 60.5509 90.8801C61.1964 91.5257 62.0548 91.8812 62.9678 91.8812C63.8808 91.8812 64.7391 91.5256 65.3846 90.8801C66.0301 90.2346 66.3857 89.3763 66.3857 88.4632C66.3857 87.5502 66.0301 86.6919 65.3847 86.0465ZM64.0035 89.4991C63.7269 89.7758 63.359 89.9281 62.9678 89.9281C62.5766 89.9281 62.2087 89.7758 61.9319 89.499C61.6553 89.2225 61.5029 88.8546 61.5029 88.4634C61.5029 88.0722 61.6553 87.7044 61.932 87.4276C62.2087 87.151 62.5766 86.9985 62.9678 86.9985C63.359 86.9985 63.7269 87.1509 64.0035 87.4276C64.2802 87.7042 64.4325 88.0721 64.4325 88.4633C64.4325 88.8546 64.2802 89.2224 64.0035 89.4991Z" fill="white"/>
                <path d="M104.708 73.0325C104.455 72.7824 104.085 72.6902 103.743 72.7922L87.2987 77.7004L92.207 61.2558C92.309 60.9144 92.2169 60.5446 91.9666 60.2909C91.7165 60.0373 91.3483 59.94 91.005 60.0369L86.7415 61.2445C86.4644 61.323 86.2361 61.5198 86.1176 61.7824L77.6304 80.5861L68.9709 83.1706C66.9548 80.7743 63.7001 79.7789 60.6529 80.6887C56.4703 81.9371 54.0831 86.3555 55.3315 90.5382C56.3553 93.9684 59.5114 96.1911 62.9209 96.1911C63.6687 96.1911 64.4287 96.0842 65.181 95.8597C68.105 94.9869 70.2329 92.534 70.7262 89.5855L74.9948 90.0044L75.4137 94.2729C72.4652 94.7661 70.0122 96.8939 69.1393 99.8181C67.891 104.001 70.2783 108.419 74.4608 109.668C75.2 109.888 75.9627 110 76.7276 110C78.3967 110 80.0605 109.454 81.4126 108.461C82.8111 107.435 83.8131 106.012 84.3104 104.346C85.2199 101.299 84.2246 98.0442 81.8283 96.0281L84.4129 87.3687L103.217 78.8815C103.479 78.763 103.676 78.5347 103.755 78.2575L104.962 73.9941C105.059 73.6512 104.962 73.2828 104.708 73.0325ZM74.8137 86.8265C74.7434 86.9822 74.7151 87.1536 74.7318 87.3236L74.8004 88.0226L69.9495 87.5468C69.681 87.5207 69.4138 87.6063 69.2109 87.7838C69.008 87.9614 68.8876 88.2149 68.8781 88.4843C68.7882 91.0434 67.0779 93.2553 64.6224 93.9881C61.4714 94.9284 58.1433 93.1301 57.203 89.9796C56.2627 86.8289 58.0609 83.5006 61.2116 82.5602C63.6813 81.823 66.3314 82.7463 67.806 84.8577C68.0472 85.2029 68.4827 85.3545 68.8859 85.2341L76.5672 82.9414L74.8137 86.8265ZM79.7648 96.1131C79.6444 96.5165 79.7961 96.9518 80.1413 97.1929C82.2527 98.6677 83.176 101.318 82.4389 103.787C81.6904 106.295 79.3418 108.047 76.7276 108.047C76.152 108.047 75.5772 107.962 75.0194 107.796C71.8688 106.856 70.0706 103.527 71.0109 100.377C71.7438 97.921 73.9557 96.2107 76.5147 96.1208C76.7842 96.1113 77.0378 95.9909 77.2153 95.788C77.3103 95.6796 77.3779 95.5525 77.4173 95.4171C77.4315 95.3888 77.445 95.36 77.4567 95.3299L79.7897 89.3265C79.985 88.8238 79.7359 88.258 79.2331 88.0626C78.7303 87.867 78.1645 88.1164 77.9691 88.6191L77.0528 90.977L76.7012 87.3923L87.711 62.9998L89.8271 62.4004L79.7648 96.1131ZM101.999 77.2881L85.1521 84.8922L86.6308 79.938L102.599 75.1722L101.999 77.2881Z" fill="white"/>
                <path d="M79.1413 99.668C78.4958 99.0225 77.6375 98.667 76.7245 98.667C75.8115 98.667 74.9532 99.0225 74.3077 99.6681C73.6621 100.314 73.3066 101.172 73.3066 102.085C73.3066 102.998 73.6621 103.856 74.3077 104.502C74.9532 105.147 75.8115 105.503 76.7245 105.503C77.6375 105.503 78.4958 105.147 79.1414 104.502C80.474 103.169 80.474 101.001 79.1413 99.668ZM77.7605 103.121C77.4837 103.397 77.1158 103.55 76.7246 103.55C76.3334 103.55 75.9655 103.397 75.6888 103.121C75.4122 102.844 75.2598 102.476 75.2598 102.085C75.2598 101.694 75.4122 101.326 75.6888 101.049C75.9654 100.773 76.3333 100.62 76.7246 100.62C77.1159 100.62 77.4838 100.773 77.7605 101.049C78.3315 101.62 78.3315 102.55 77.7605 103.121Z" fill="white"/>
                <path d="M80.2954 85.3273C79.7924 85.1323 79.2268 85.3819 79.0318 85.8848L79.0204 85.9143C78.8254 86.4172 79.0751 86.9829 79.5779 87.1778C79.694 87.2227 79.8133 87.2441 79.9307 87.2441C80.3221 87.2441 80.6915 87.0071 80.8414 86.6203L80.8529 86.5908C81.0479 86.088 80.7983 85.5223 80.2954 85.3273Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_764_2916">
                    <rect width="50" height="50" fill="white" transform="translate(55 60)"/>
                </clipPath>
            </defs>
        </svg>
    );
}

export default ScissorsCard;
