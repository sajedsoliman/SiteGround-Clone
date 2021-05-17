import React from 'react'

// Material-ui imports
import { Button, InputLabel, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    subTitle: {
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: 550,
        color: 'rgb(255, 255, 255, 60%)'
    },
    cardtitle: {
        textTransform: "capitalize",
        marginBottom: 20
    },
    cardDescription: {
        lineHeight: "25px",
        marginBottom: 100
    },
    cardButton: {
        paddingRight: 30,
        paddingLeft: 30
    }
}))

export default function ToolsCards() {
    const classes = useStyles()

    return (
        <div className="cards">
            <div className="card ws-building">
                <div className="wrapper">
                    <InputLabel className={classes.subTitle}>easy & fast</InputLabel>
                    <Typography className={classes.cardtitle} variant="h4" color="inherit">website building</Typography>
                    <Typography className={classes.cardDescription} paragraph>Need a website but don’t know where to start? We give you a full solution including your choice of sitebuilder, premium features, and the support you need to launch your site.</Typography>
                    <Button className={classes.cardButton} variant="outlined" color="inherit">Learn More</Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect fill="rgb(30, 99 ,70)" width={144} height={144} opacity={0} /><path fill="rgb(30, 99 ,70)" d="M22.655,134.437a7.848,7.848,0,0,1-4.119-1.171h0a7.838,7.838,0,1,1,4.119,1.172Zm-3.073-2.876a5.9,5.9,0,1,0-1.937-8.11,5.9,5.9,0,0,0,1.937,8.11Z" /><path fill="rgb(30, 99 ,70)" d="M16.177,138.521a1,1,0,0,1-.435-.1A12.4,12.4,0,0,1,8.861,127.1a1,1,0,0,1,1-.973h.027a1,1,0,0,1,.974,1.026,10.511,10.511,0,0,0,5.754,9.464,1,1,0,0,1-.438,1.9Z" /><path fill="rgb(30, 99 ,70)" d="M32.96,35.666a.976.976,0,0,1-.132-.009L16.439,33.484a1,1,0,0,1-.658-1.6L25.837,18.931a1,1,0,0,1,1.713.227L33.882,34.28a1,1,0,0,1-.922,1.386ZM18.429,31.731l12.936,1.715-5-11.935Z" /><path fill="rgb(173, 217, 192)" d="M110.276,38.23c-.07-.047-70.966,7.637-71.008,7.664-.026.018-25.047,27.729-25.047,27.729l13.065-1.2.13,37.457L68.79,122.453c.122.035,52.481-12.521,53.358-12.73l.077-34.113s13.479-1.871,14.329-1.987C137.2,73.535,110.353,38.282,110.276,38.23Z" className="sgmaincolor" /><path fill="rgb(30, 99 ,70)" d="M137.611,73.344c-6.695-8.991-26.279-35.393-26.279-35.393a.973.973,0,0,0-.162-.146.99.99,0,0,0-1-.569L39.161,44.9a.965.965,0,0,0-.141.045c-.027.007-.054.011-.081.02-.012,0-.022.012-.033.016a1,1,0,0,0-.18.087.247.247,0,0,0-.061.03.829.829,0,0,0-.062.071.688.688,0,0,0-.075.055L13.479,72.953s-.006.012-.011.018a6.987,6.987,0,0,0-.194.337,1.127,1.127,0,0,0-.022.156,1.05,1.05,0,0,0-.025.229c0,.008,0,.014,0,.021a.94.94,0,0,0,.054.19,1.009,1.009,0,0,0,.045.154,1,1,0,0,0,.226.306h0c.017.015.038.02.055.034a.9.9,0,0,0,.592.22c.008,0,.014,0,.022,0h0c.03,0,.061,0,.092,0l11.976-1.1.126,36.366a1,1,0,0,0,.709.953L68.5,123.409a1.046,1.046,0,0,0,.288.043h0a1.016,1.016,0,0,0,.233-.027L122.38,110.7a1,1,0,0,0,.768-.97l.075-33.267,12.959-1.775c.749-.1,1.287-.157,1.487-.483A.707.707,0,0,0,137.611,73.344ZM26.777,71.466l-10.1.927L39.2,47.462l3.45,4.554Zm10.191,3.756c-.016,0-.03-.009-.047-.009h0a.919.919,0,0,0-.156.032.939.939,0,0,0-.184.038.92.92,0,0,0-.172.093.642.642,0,0,0-.27.245.924.924,0,0,0-.111.166,1,1,0,0,0-.054.179.888.888,0,0,0-.046.152.443.443,0,0,0,.006.051c0,.016-.01.03-.01.047l.109,35.237-7.618-2.314-.125-36.36L43.9,53.656,62.043,77.61,37.015,75.217C37,75.216,36.984,75.223,36.968,75.222Zm13.483,40.613-12.42-3.774-.106-34.747,12.539,1.2ZM67.789,121.1l-15.338-4.66L52.464,78.7l11.22,1.072,2.967,3.916c.015.021.04.028.057.047a1,1,0,0,0,.239.2,1.165,1.165,0,0,0,.1.06.98.98,0,0,0,.4.092h0a.991.991,0,0,0,.133-.009l.206-.029Zm53.361-12.17L69.789,121.186V83.776l51.433-7.044ZM67.891,82.018,41.133,46.7l68.7-7.415L134.76,72.859Z" /></svg>
                </div>
            </div>
            <div className="card wt-transfter">
                <div className="wrapper">
                    <InputLabel className={classes.subTitle}>smooth</InputLabel>
                    <Typography className={classes.cardtitle} variant="h4" color="inherit">website transfer</Typography>
                    <Typography className={classes.cardDescription} paragraph>Get free automated WordPress migration with an easy to use WordPress plugin or a professional website transfer done by our experts.</Typography>
                    <Button className={classes.cardButton} variant="outlined" color="inherit">Learn More</Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect width={144} height={144} fill="rgb(142, 93, 37)" opacity={0} /><path fill="rgb(240, 201, 154)" d="M128.937,76.379l-4.905-14.857H107.681V41.59H31.6V61.522H44.886c3.656-.013,7.042,3.615,7.054,7.277l.007,1.977a4.293,4.293,0,0,0,3.683,4.057,2.405,2.405,0,0,1,.862,4.431,3.278,3.278,0,0,1-1.387.682H35.689c-1.713-.024-3.126-1.67-4.088-3.235V98.37H44.887V98.4a7.153,7.153,0,0,0,14.306-.025h56.666V98.4a7.153,7.153,0,0,0,14.306-.025h6.132V84.04Z" className="sgmaincolor" /><path fill="rgb(142, 93, 37)" d="M137,83.333l-7-7-5.043-15.129a1,1,0,0,0-.948-.684H108.681V41.59a1,1,0,0,0-1-1H31.6a1,1,0,0,0-1,1V60.522H20.36a1,1,0,0,0-.953,1.3c.508,1.605,2.388,6.838,5.267,6.838h.063c.527,1.507,1.969,4.856,4.646,5.871A18.191,18.191,0,0,0,30.6,77.01V98.37a1,1,0,0,0,1,1H43.953a8.145,8.145,0,0,0,8.086,7.164h.029a8.163,8.163,0,0,0,8.056-7.164h54.767a8.154,8.154,0,0,0,8.1,7.164h.029a8.149,8.149,0,0,0,8.068-7.164h5.209a1,1,0,0,0,1-1V84.04A1,1,0,0,0,137,83.333ZM38.754,72.805H30.643c-1.8-.256-3.1-2.49-3.772-4.143l6.774,0a1,1,0,0,0,0-2l-8.966,0h0c-.8,0-2.035-1.988-2.9-4.14H44.89a6.086,6.086,0,0,1,4.167,1.952A6.442,6.442,0,0,1,50.94,68.8l.007,1.978a5.27,5.27,0,0,0,4.529,5.042,1.434,1.434,0,0,1,1.176,1.414,1.569,1.569,0,0,1-.368,1.2,1.934,1.934,0,0,1-1.179.509H35.7c-1.639-.023-3.171-2.425-4.01-4.141h7.061a1,1,0,0,0,0-2ZM52.06,104.534h-.021a6.161,6.161,0,0,1-6.153-6.143,6.167,6.167,0,0,1,6.132-6.186h.022a6.165,6.165,0,0,1,.02,12.329ZM106.681,61.3a.575.575,0,0,0,0,.446V97.37H60.126a8.145,8.145,0,0,0-8.086-7.165h-.03a8.163,8.163,0,0,0-8.055,7.165H32.6V79.557a4.7,4.7,0,0,0,3.088,1.389H55.108a3.892,3.892,0,0,0,2.617-1.123,3.511,3.511,0,0,0,.925-2.665,3.413,3.413,0,0,0-2.865-3.313,3.3,3.3,0,0,1-2.838-3.072L52.94,68.8a8.459,8.459,0,0,0-2.439-5.7,7.9,7.9,0,0,0-5.592-2.569H32.6V42.59h74.08Zm20.683,41.415a6.126,6.126,0,0,1-4.354,1.82h-.021a6.165,6.165,0,0,1-.021-12.329h.022a6.165,6.165,0,0,1,4.374,10.509Zm7.931-5.344h-4.208a8.1,8.1,0,0,0-2.344-4.794,8.324,8.324,0,0,0-5.783-2.371,8.149,8.149,0,0,0-8.067,7.165h-6.212V62.522h14.612l4.45,13.353H114.8a1,1,0,1,0,0,2h13.915l6.579,6.579Z" /><path fill="rgb(142, 93, 37)" d="M14.387,39.181A6.961,6.961,0,0,1,8.154,29.144h0a6.961,6.961,0,1,1,6.233,10.037ZM9.949,30.027a4.961,4.961,0,1,0,6.641-2.256,4.929,4.929,0,0,0-6.641,2.256Z" /><path fill="rgb(142, 93, 37)" d="M3.058,27.259a1,1,0,0,1-.936-1.351,10.854,10.854,0,0,1,9.3-6.917,1,1,0,1,1,.133,2A8.943,8.943,0,0,0,4,26.61,1,1,0,0,1,3.058,27.259Z" /><path fill="rgb(142, 93, 37)" d="M23.778,95.439H4.206a1,1,0,1,1,0-2H23.778a1,1,0,1,1,0,2Z" /><path fill="rgb(142, 93, 37)" d="M23.778,87.518H13.006a1,1,0,0,1,0-2H23.778a1,1,0,0,1,0,2Z" /><path fill="rgb(142, 93, 37)" d="M128.828,36.523a.974.974,0,0,1-.132-.008l-15.159-2.01a1,1,0,0,1-.659-1.605l9.3-11.976a1.01,1.01,0,0,1,.922-.378,1,1,0,0,1,.79.605l5.86,13.986a1,1,0,0,1-.923,1.386Zm-13.3-3.772L127.233,34.3l-4.524-10.8Z" /></svg>
                </div>
            </div>
            <div className="card managed-wp">
                <div className="wrapper">
                    <InputLabel className={classes.subTitle}>suitable for all users</InputLabel>
                    <Typography className={classes.cardtitle} variant="h4" color="inherit">managed wordpress</Typography>
                    <Typography className={classes.cardDescription} paragraph>All our managed WordPress plans include WordPress installation, automated migrations, automatic updates, advanced caching, and expert WordPress support.</Typography>
                    <Button className={classes.cardButton} variant="outlined" color="inherit">Learn More</Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect width={144} height={144} fill="rgb(34, 109, 122)" opacity={0} /><path fill="rgb(176, 224, 233)" d="M68.918,28.033a50.193,50.193,0,1,0,50.195,50.191A50.247,50.247,0,0,0,68.918,28.033ZM24.913,78.224a43.828,43.828,0,0,1,3.811-17.908l20.991,57.513A44.011,44.011,0,0,1,24.913,78.224ZM68.92,122.233a43.942,43.942,0,0,1-12.432-1.793l13.2-38.367,13.527,37.059a4.339,4.339,0,0,0,.315.607A43.918,43.918,0,0,1,68.92,122.233ZM74.988,57.59c2.647-.137,5.034-.417,5.034-.417a1.819,1.819,0,0,0-.281-3.627s-7.128.559-11.73.559c-4.325,0-11.59-.559-11.59-.559-2.373-.14-2.651,3.486-.279,3.627,0,0,2.243.278,4.615.417l6.856,18.785-9.631,28.883L41.958,57.59c2.65-.137,5.034-.417,5.034-.417a1.819,1.819,0,0,0-.281-3.627s-7.128.559-11.73.559c-.825,0-1.8-.021-2.832-.055a43.995,43.995,0,0,1,66.485-8.278c-.188-.011-.374-.035-.57-.035a7.619,7.619,0,0,0-7.388,7.81c0,3.628,2.091,6.694,4.322,10.322A23.165,23.165,0,0,1,98.626,76q0,5.647-3.349,14.229L90.887,104.9Zm32.546-.478a44.016,44.016,0,0,1-16.492,59.149L104.483,77.4a41.563,41.563,0,0,0,3.348-15.761A33.6,33.6,0,0,0,107.534,57.112Z" className="sgmaincolor" /><path fill="rgb(34, 109, 122)" d="M24.414,32.7a1,1,0,0,0,.962-1.275L20.761,15.306a1,1,0,0,0-1.674-.426L7.323,26.818a1,1,0,0,0,.465,1.671l16.379,4.175A1,1,0,0,0,24.414,32.7ZM9.97,26.981,19.31,17.5,22.973,30.3Z" /><path fill="rgb(34, 109, 122)" d="M29.663,59.973a1,1,0,0,0-.905-.656.979.979,0,0,0-.947.592,45.01,45.01,0,0,0,21.467,58.819,1,1,0,0,0,1.377-1.242Zm-3.75,18.251a42.624,42.624,0,0,1,2.755-15.145L47.892,115.75A42.7,42.7,0,0,1,25.913,78.224Z" /><path fill="rgb(34, 109, 122)" d="M68.919,27.033a51.193,51.193,0,1,0,51.193,51.191A51.249,51.249,0,0,0,68.919,27.033Zm0,100.386a49.193,49.193,0,1,1,49.193-49.195A49.248,49.248,0,0,1,68.919,127.419Z" /><path fill="rgb(34, 109, 122)" d="M90.9,105.9a1,1,0,0,0,.941-.713L96.209,90.6C98.477,84.78,99.627,79.871,99.627,76A24.1,24.1,0,0,0,95.85,63.345l-.526-.85c-1.958-3.161-3.648-5.891-3.648-8.948,0-3.275,2.442-6.81,6.389-6.81.1,0,.192.009.286.017l.226.016a1,1,0,0,0,.733-1.735,44.992,44.992,0,0,0-68,8.466,1,1,0,0,0,.8,1.548c1.046.035,2.03.056,2.865.056,4.587,0,11.735-.557,11.788-.561a.736.736,0,0,1,.862.726.789.789,0,0,1-.756.91c-.023,0-2.385.278-4.97.41a1,1,0,0,0-.9,1.318l16.024,47.668a1,1,0,0,0,.948.681h0a1,1,0,0,0,.948-.683l9.631-28.883a1,1,0,0,0-.01-.659L61.7,57.247a1,1,0,0,0-.881-.656c-2.31-.135-4.528-.407-4.614-.416a.706.706,0,0,1-.7-.825.784.784,0,0,1,.847-.807c.3.022,7.353.562,11.666.562,4.588,0,11.736-.557,11.788-.561a.747.747,0,0,1,.863.726.789.789,0,0,1-.756.91c-.024,0-2.385.278-4.97.41a1,1,0,0,0-.9,1.318l15.9,47.307A.968.968,0,0,0,90.9,105.9ZM76.352,58.508c2.069-.142,3.7-.332,3.788-.341a2.774,2.774,0,0,0,2.514-3.074,2.739,2.739,0,0,0-2.991-2.545c-.071.006-7.143.557-11.652.557-4.236,0-11.441-.551-11.531-.558A2.79,2.79,0,0,0,53.5,55.231a2.664,2.664,0,0,0,2.518,2.935c.084.01,1.91.235,4.023.38l6.512,17.843-8.576,25.719-14.656-43.6c2.071-.142,3.7-.332,3.788-.341a2.775,2.775,0,0,0,2.514-3.074,2.746,2.746,0,0,0-2.991-2.545c-.071.006-7.143.557-11.651.557-.3,0-.624,0-.962-.008a42.992,42.992,0,0,1,62.156-8.134,8.744,8.744,0,0,0-6.5,8.584c0,3.626,1.917,6.722,3.948,10l.505.818A22.253,22.253,0,0,1,97.627,76c0,3.617-1.1,8.282-3.308,13.942l-3.487,11.648Z" /><path fill="rgb(34, 109, 122)" d="M84.159,118.789,70.631,81.73a.961.961,0,0,0-.948-.657,1,1,0,0,0-.937.675l-13.2,38.367a1,1,0,0,0,.663,1.284,45.026,45.026,0,0,0,27.66-.717,1,1,0,0,0,.522-1.463A3.252,3.252,0,0,1,84.159,118.789Zm-26.381.975,11.942-34.7,12.441,34.082A43.213,43.213,0,0,1,57.778,119.764Z" /><path fill="rgb(34, 109, 122)" d="M103.538,77.072,90.1,115.934a1,1,0,0,0,.945,1.327,1.013,1.013,0,0,0,.5-.135,45.018,45.018,0,0,0,16.865-60.495,1,1,0,0,0-1.867.616,32.914,32.914,0,0,1,.287,4.39A40.734,40.734,0,0,1,103.538,77.072Zm5.289-14.887a43.02,43.02,0,0,1-15.912,51.72l12.5-36.135A42.928,42.928,0,0,0,108.827,62.185Z" /><path fill="rgb(34, 109, 122)" d="M128.534,40.843a8.432,8.432,0,1,0,8.431,8.432A8.441,8.441,0,0,0,128.534,40.843Zm0,14.863a6.432,6.432,0,1,1,6.431-6.431A6.438,6.438,0,0,1,128.534,55.706Z" /></svg>
                </div>
            </div>
            <div className="card collaboration-tools">
                <div className="wrapper">
                    <InputLabel className={classes.subTitle}>preferred by designers & agencies</InputLabel>
                    <Typography className={classes.cardtitle} variant="h4" color="inherit">collaboration tools</Typography>
                    <Typography className={classes.cardDescription} paragraph>We have an awesome set of tools that allow you to easily manage your clients, collaborate on sites, and transfer ownership of newly built sites to clients.</Typography>
                    <Button className={classes.cardButton} variant="outlined" color="inherit">Learn More</Button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><path fill="rgb(83, 47, 130)" d="M101.033,120.668a1,1,0,0,1-.712-1.7l20.026-20.293a1,1,0,0,1,1.424,1.4L101.745,120.37A1,1,0,0,1,101.033,120.668Z" /><path fill="rgb(83, 47, 130)" d="M99.912,132.621A11.671,11.671,0,0,1,88.1,121.336a11.473,11.473,0,0,1,3.358-8.612l8.761-8.879a1,1,0,0,1,1.424,1.405l-8.761,8.879a9.493,9.493,0,0,0-2.784,7.124,9.9,9.9,0,0,0,2.874,6.581,9.714,9.714,0,0,0,13.706-.091l8.76-8.878a1,1,0,0,1,1.424,1.4l-8.76,8.878A11.35,11.35,0,0,1,99.912,132.621Z" /><path fill="rgb(83, 47, 130)" d="M121.159,115.494a1,1,0,0,1-.712-1.7l8.761-8.878a9.5,9.5,0,0,0,2.784-7.124,9.894,9.894,0,0,0-2.875-6.581,9.713,9.713,0,0,0-13.7.09l-8.761,8.878a1,1,0,1,1-1.423-1.4l8.76-8.879a11.719,11.719,0,0,1,16.533-.109,11.92,11.92,0,0,1,3.469,7.921,11.473,11.473,0,0,1-3.358,8.612l-8.761,8.878A1,1,0,0,1,121.159,115.494Z" /><polygon fill="rgb(209, 191, 218)" points="85.996 93.29 85.996 75.055 76.397 65.895 56.844 65.895 37.291 65.895 27 75.157 27 93.072 41.22 103.737 41.22 80.63 41.22 113.514 71.599 113.445 71.599 103.848 85.996 93.29" className="sgmaincolor" /><circle fill="rgb(209, 191, 218)" cx="56.844" cy="47.44" r="17.495" className="sgmaincolor" /><path fill="rgb(83, 47, 130)" d="M86.686,74.331l-9.6-9.16c-.009-.009-.022-.012-.031-.02a.918.918,0,0,0-.164-.106,1.055,1.055,0,0,0-.162-.087.984.984,0,0,0-.186-.035.944.944,0,0,0-.148-.029H62.905a18.494,18.494,0,1,0-12.122,0H37.291a.964.964,0,0,0-.175.033,1.024,1.024,0,0,0-.158.029.947.947,0,0,0-.189.105.96.96,0,0,0-.134.082l-.013.008L26.331,74.414a1,1,0,0,0-.331.743V93.072a1,1,0,0,0,.4.8l13.821,10.365v9.276a1,1,0,0,0,1,1h0l30.378-.068a1,1,0,0,0,1-1v-9.091L86.587,94.1A1,1,0,0,0,87,93.291V75.054A1,1,0,0,0,86.686,74.331ZM40.35,47.44a16.495,16.495,0,1,1,16.494,16.5A16.512,16.512,0,0,1,40.35,47.44ZM57.193,74.888,41.466,66.894H72.355ZM85,92.784l-12.4,9.09V80.813a1,1,0,0,0-2,0v31.634l-28.378.064V80.63a1,1,0,0,0-2,0v21.107L28,92.572V75.6L37.45,67.1l19.3,9.809a.851.851,0,0,0,.125.045.771.771,0,0,0,.08.03,1,1,0,0,0,.247.033h0a1,1,0,0,0,.253-.035.661.661,0,0,0,.074-.028.9.9,0,0,0,.139-.052l18.558-9.785L85,75.482Z" /><polygon fill="rgb(209, 191, 218)" points="133.633 59.477 133.633 46.322 126.708 39.714 112.603 39.714 98.498 39.714 91.074 46.396 91.074 59.32 101.332 67.014 101.332 50.344 101.332 74.066 123.247 74.017 123.247 67.093 133.633 59.477" className="sgmaincolor" /><circle fill="rgb(209, 191, 218)" cx="112.603" cy="28.766" r="10.39" className="sgmaincolor" /><path fill="rgb(83, 47, 130)" d="M134.323,45.6,127.4,38.991c-.009-.009-.023-.012-.033-.021a.932.932,0,0,0-.155-.1,1,1,0,0,0-.171-.092.976.976,0,0,0-.179-.034,1.017,1.017,0,0,0-.152-.029h-8.574a11.39,11.39,0,1,0-11.062,0H98.5a1.055,1.055,0,0,0-.175.032.937.937,0,0,0-.158.03,1,1,0,0,0-.189.1.88.88,0,0,0-.134.083l-.013.007-7.424,6.681a1,1,0,0,0-.331.743V59.32a1,1,0,0,0,.4.8l9.857,7.393v6.553a1,1,0,0,0,1,1h0l21.915-.049a1,1,0,0,0,1-1V67.6l9.978-7.316a1,1,0,0,0,.408-.807V46.322A1,1,0,0,0,134.323,45.6Zm-31.11-16.833a9.39,9.39,0,1,1,9.391,9.391A9.4,9.4,0,0,1,103.213,28.765Zm9.641,17.123-10.181-5.173h19.993ZM132.633,58.97l-8.386,6.15V50.476a1,1,0,0,0-2,0V73.019l-19.915.045V50.343a1,1,0,0,0-2,0v14.67L92.074,58.82V46.841l6.583-5.924,13.752,6.989a.851.851,0,0,0,.125.045.787.787,0,0,0,.081.03.984.984,0,0,0,.246.033h0a1,1,0,0,0,.254-.035.744.744,0,0,0,.074-.028.926.926,0,0,0,.138-.052l13.209-6.964,6.1,5.815Z" /><path fill="rgb(83, 47, 130)" d="M16.108,135.873l-.188,0a7.318,7.318,0,0,1-4.856-12.619,7.441,7.441,0,0,1,5.228-2.012,7.329,7.329,0,0,1,7.13,7.5h0A7.327,7.327,0,0,1,16.108,135.873Zm0-12.635a5.317,5.317,0,0,0-.132,10.633c.046,0,.091,0,.137,0a5.324,5.324,0,0,0,5.314-5.182h0a5.324,5.324,0,0,0-5.181-5.451C16.194,123.238,16.148,123.238,16.1,123.238Zm6.319,5.479h0Z" /><path fill="rgb(83, 47, 130)" d="M28.212,26.535a.989.989,0,0,1-.258-.034L12.366,22.338a1,1,0,0,1-.446-1.676L23.472,9.2a.986.986,0,0,1,.969-.254,1,1,0,0,1,.7.714L29.18,25.285a1,1,0,0,1-.968,1.25Zm-13.648-5.68,12.251,3.272L23.644,11.85Z" /></svg>
                </div>
            </div>
        </div>
    )
}
