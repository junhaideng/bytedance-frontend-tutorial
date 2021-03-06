import React from "react";
import styles from "../../styles/deal/PositionDetail.module.css"
import { position } from "./interface";


// 用户信息
export default function PositionDetail(props: position) {
    const { location, provider, distance } = props
    return <div className={styles.detail_poi_info}>
        <div className={styles.detail_poi_info_detail}>
            <p className={styles.detail_poi_info_detail_title}> {location?.name}
                <span className={styles.detail_poi_info_detail_title_tag}>离我最近</span>
            </p>
            <p className={`${styles.detail_poi_info_detail_more} ${styles.hue_base_ellipsis}`}>
                <span className={styles.line_seg}>
                    <i className={styles.hue_base_icon_base}>⦿</i>
                    <span className={styles.distance}>
                        {distance}
                    </span>
                </span>
                <span className={styles.addr}>
                    {location?.addr}
                </span>
            </p>
        </div>
        <div className={styles.detail_supplier_info}>
            <div className={styles.detail_supplier_info_content}>
                <p>
                    <span>供应商：</span>
                    {provider?.title}
                </p>
                <p><span>服务时间：</span> {provider?.serviceTime} </p>
            </div>
            <div className={styles.detail_supplier_info_phone}>
                <i className={styles.hue_base_icon_base}>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M715.995429 931.364571c74.569143 0 123.867429-20.150857 167.570285-69.010285 3.437714-3.419429 6.436571-7.277714 9.874286-10.715429 25.709714-28.708571 37.705143-56.996571 37.705143-83.986286 0-30.866286-17.993143-59.574857-56.137143-86.162285l-124.708571-86.564572c-38.582857-26.569143-83.584-29.568-119.588572 5.997715l-32.987428 33.005714c-9.874286 9.856-18.432 10.294857-28.288 4.278857-22.710857-14.573714-69.430857-55.277714-101.156572-87.003429-33.426286-32.987429-65.993143-69.851429-82.706286-96.841142-5.997714-9.874286-5.138286-18.011429 4.717715-27.867429l32.566857-33.005714c36.004571-35.986286 33.005714-81.426286 6.436571-119.552l-87.003428-124.708572c-26.148571-38.162286-54.857143-55.734857-85.723429-56.155428-26.989714-0.438857-55.277714 11.995429-83.986286 37.705143-3.858286 3.437714-7.296 6.436571-11.154285 9.435428-48.420571 43.702857-68.571429 93.001143-68.571429 167.131429 0 122.587429 75.428571 271.725714 213.851429 410.148571 137.581714 137.581714 287.158857 213.869714 409.289143 213.869714z m0.438857-66.011428c-109.293714 2.139429-249.417143-81.846857-360.429715-192.420572-111.853714-111.433143-199.716571-256.292571-197.577142-365.568 0.859429-47.158857 17.152-87.862857 51.017142-117.010285 2.56-2.56 5.12-4.717714 8.118858-6.857143 12.434286-11.154286 26.587429-17.133714 38.582857-17.133714 12.854857 0 23.990857 4.699429 32.146285 17.554285l83.145143 124.708572c8.996571 13.293714 9.856 28.306286-3.437714 41.581714l-37.723429 37.723429c-29.988571 29.568-27.428571 65.572571-5.997714 94.281142 24.429714 33.005714 66.870857 81.005714 99.437714 113.572572 33.005714 33.005714 84.845714 79.286857 117.851429 104.137143 28.708571 21.430857 65.152 23.588571 94.72-5.997715l37.705143-37.705142c13.293714-13.293714 27.867429-12.434286 41.142857-3.858286l124.708571 83.145143c12.873143 8.557714 18.011429 19.273143 18.011429 32.146285 0 12.434286-5.997714 26.148571-17.554286 38.985143a106.422857 106.422857 0 0 1-6.436571 8.155429c-29.568 33.426286-70.290286 49.700571-117.430857 50.56z" />
                    </svg>
                </i>
            </div>
        </div>
    </div>
}
