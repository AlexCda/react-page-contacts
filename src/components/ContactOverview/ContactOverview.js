import classes from "./ContactOverview.module.css"

const ContactOverview = ({data, onGetContact}) => {
    return (
        <div className={classes.contact} onClick={() => onGetContact(data)}>
            <img alt={`${data.fullName}`} className={classes["contact-img"]} src={`${data.photo}`}/>
            <div className={classes["contact-info"]}>
                <span className={classes["contact-name"]}>{data.fullName}</span>
                <span className={classes["contact-job"]}>{data.job}</span>
            </div>
        </div>
    )
}

export default ContactOverview