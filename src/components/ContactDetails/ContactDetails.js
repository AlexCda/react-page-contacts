import classes from "./ContactDetails.module.css"

const ContactDetails = ({data}) => {
    return (
        <div className={classes["contact-details"]}>
            <div className={classes["contact-card"]}>
                <div className={classes["contact-card-left"]}>
                    <img alt="Maxime Faubert" className={classes["contact-image"]} src={`${data.photo}`}/>
                </div>
                <div className={classes["contact-card-right"]}>
                    <p className={classes["contact-name"]}>{data.fullName}</p>
                    <p className={classes["contact-detail-info"]}><strong className={classes["contact-detail-text-strong"]}>Job :</strong> {data.job}</p>
                    <p className={classes["contact-detail-info"]}><strong className={classes["contact-detail-text-strong"]}>Email :</strong> {data.email}</p>
                    <p className={classes["contact-detail-info"]}><strong className={classes["contact-detail-text-strong"]}>Téléphone :</strong>{data.phone}</p>
                    <p className={classes["contact-detail-info"]}><strong className={classes["contact-detail-text-strong"]}>Adresse :</strong>{data.address}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails