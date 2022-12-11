import React from 'react';
import './personasstyle.css';

const Personas = () => {
    return (
        <div>
            <div className="pageTitle">
                <h1>
                    Personas and Storyboarding
                </h1>
            </div>
            <p style={{margin:'2rem',}}>
                About the project: For this project, we had to choose an interface that was easily available to the public, observe people using it, and interview at least three users. Based on these observations and interviews, we had to create empathy maps for two representative users and a storyboard describing a scenario for one of these users. 
            </p> 
            <div className="imageSection">
                <p>
                    For this project, I chose to focus on the multimedia and 
                    projector interface in the DeCiccio Family Auditorium of the 
                    Salomon Center for Teaching.
                    I chose this interface because I felt there were a wide range of
                    experiences users could have with using that interface, and  
                    because it had a number of interactive components and features 
                    that users could use. The key components of the interface are 
                    highlighted and labelled below. <br/>
                    The image below shows the basic interface. The cables indicate 
                    to users that they can connect their personal devices to the 
                    display, while the larger monitor and the drawer indicate that 
                    they have the alternative of logging into the connected computer
                    and displaying content from that computer.
                </p>
                <img className="interfaceImg" src={process.env.PUBLIC_URL + "/assets1/interface1.jpg"} alt="Scan of a drawing of the interface" style={{width:'25rem',}}/>
                <p>
                    The image below shows the basic settings or default window of 
                    the control panel of the interface. A menu on the right allows 
                    the user to navigate and adjust different systems settings,
                    while the title at the top informs them of where they are. This
                    basic mode lets them select a method of connecting a device, 
                    adjusting the volume and selected room controls, and to shutdown
                    the system. It is worth noting that the icon for the basic and 
                    advanced settings are counterintuitive - the basic settings have
                    a star icon (stars are generally associated with special things),
                    while the advanced settings have a gear icon (which is usually
                    associated with general settings). Other icons used are more 
                    intuitive and used in a standard context/manner (like the lights
                    and mute icons).
                </p>
                <img className="interfaceImg" src={process.env.PUBLIC_URL + "/assets1/interface2.jpg"} alt="Scan of a drawing of the interface" style={{width:'25rem',}}/>
                <p>
                    This image shows the display controls once a connected device
                    has been chosen. Salient features here are the colour-coded on 
                    and off buttons for the projector and screen, the back button to
                    take the user back to the previous screen, and the multiple
                    "Mute display" buttons. It is worth noting that the term "mute 
                    display" is slightly ambiguous and confusing and it is not
                    immediately clear to the user what that button does. 
                </p>
                <img className="interfaceImg" src={process.env.PUBLIC_URL + "/assets1/interface3.jpg"} alt="Scan of a drawing of the interface" style={{width:'25rem',}}/>
            </div>
            <div className = "textSection">
                <h2>
                    Interview questions
                </h2>
                <div className="mainListContainer">
                    <ol type="1">
                        <li> What is your goal/purpose behind using this device? </li>
                        <li> What features do you think/know this device has? How do you
                            know this/what makes you think this?
                        </li>
                        <li> Is this your first time using this device? 
                            <div className="subListContainer">
                                <ol type="a">
                                <li> [Yes] What clues guided you in using this device? 
                                    What are your first impressions of this device? 
                                    Please focus on functionality and be as detailed as 
                                    you need to be.
                                </li>
                                <li> [No] Think back to when you first used this device. 
                                    Was there anything that confused or misled you? What
                                    were your first impressions of this device? Please 
                                    be as detailed as you need to be.
                                </li>
                            </ol>
                            </div>
                        </li>
                        <li> Do you find it easy/think it will be easy to remember how 
                            the interface works?
                        </li>
                        <li> [If not a first-time user] How long did it take you to 
                            learn how to use this device?
                        </li>
                        <li> [If not a first-time user] What are frequent thoughts or 
                            emotions you experience while using this device? 
                        </li>
                    </ol>
                </div>
            </div>
            <div className = "textSection">
                <h2>
                    Summary of interview responses
                </h2>
                <h4 style={{margin:'0%',}}>
                    Pseudonyms have been used out of respect for the privacy of 
                    respondents. 
                </h4>
                <h3>
                    &rarr; Tech-Savvy Tim
                </h3>
                <p className="userInterviewDescr">
                    Tech-Savvy Tim works with Brown's Office of Information Technology 
                    (OIT). He said he usually interacts with the interface to set it
                    up for professors to use in classes. He has been interacting 
                    with the setup for a little over a year, and is now quite 
                    familiar with it. He said he started out not knowing anything 
                    about the setup or AirMedia, and was trained by senior OIT staff
                    in the use of the interface. Despite being overwhelmed by the 
                    setup initially, Tim feels like he has gotten more comfortable
                    with the device and all its features from using it on a daily 
                    basis and experimenting with the system. He did acknowledge that 
                    the device still manages to stump him on occasion with a strange
                    error or issue, especially since it does not have a user manual
                    or guide, but he has a good idea of how to troubleshoot now.
                    He reported that the sometimes the only solution is to do a 
                    back-end reset or to connect wirelessly using AirMedia.  
                    Tim did mention occasionally feeling stressed and overwhelmed 
                    when trying to troubleshoot the system for a professor while 
                    working against the clock. <br/> <br/>
                    From my observations, Tim appeared to be methodical and 
                    following a process when working with the interface to set it up
                    for the professor, barely looking up from what he was doing 
                    while setting it up. He did not display any outward signs of 
                    shock, distress, or irritation with the interface while using it.
                </p>
                <h3>
                    &rarr; Professor P
                </h3>
                <p className="userInterviewDescr">
                    Professor P is teaches a course in life sciences, and so only 
                    works with computers as educational tools. His primary goal 
                    in using the device is to enable classes to run smoothly and 
                    allow students to see material projected onto a larger screen. 
                    He said his intention behind using the clicker and pointer was 
                    to make it easier to walk while talking and to interact with and
                    watch students during the lecture, which would be much harder if 
                    he stayed near the computer interface. Professor P was familiar
                    with connecting to the interface and presenting using it, and
                    was aware of an additional feature that allows presenters to 
                    annotate their presentations using a stylus provided with the 
                    interface. He reported learning to use these features within a 
                    few minutes, and that most of this was intuitive and that he was
                    used to interacting with new technology and exploring its uses. 
                    Professor P regarded the interface as a tool to be used in the 
                    background that should not interfere with the message of what he
                    was teaching, and reported a mostly frictionless user 
                    experience, but acknowledged that it could be overwhelming to a 
                    first-time user or someone less tech-savvy. <br/> <br/>
                    From my observations, Professor P was also methodical and 
                    appeared to be following some set of instructions on his screen 
                    when connecting his device to the interface. He connected to the
                    interface using his personal laptop and primarily interacted 
                    with it using this laptop, a clicker, and a laser pointer. He 
                    did indeed walk around a lot and interact with the audience when
                    using the projector interface, as mentioned during his 
                    interview. It is worth noting that I was not able to locate the 
                    stylus mentioned by Professor P near the interface.
                </p>
                <h3>
                    &rarr; Professor G
                </h3>
                <p className="userInterviewDescr">
                    Professor G teaches also teaches a course in a non-CS discipline.
                    Professor G also used the interface primarly to present content 
                    for classes, and reported familiarity with only the basic 
                    features of the interface. His overall impression of the 
                    interface was that it worked correctly, and said he found it 
                    easy to use for his purposes and that he learnt how to use it in
                    a span of minutes because of how intuitive it was. However, he 
                    did also report a problem with people changing settings on the 
                    device and finding it difficult to return them to his preferred
                    settings. Professor G also mentioned that he needs someone from 
                    OIT to come reset the system for him before he can use it, but
                    believed that this was not an issue with the interface as much
                    as it was an issue with the maintenance and administration of 
                    the auditorium and the interface. <br/><br/>
                    Professor G appeared to have a smooth experience using the
                    interface during class, and did not have to stop the 
                    presentation at any point to adjust the settings. He did not
                    take time to connect to the interface and use it nor did he 
                    adjust things on his end before looking at the projector screen.
                </p>
                <h3>
                    &rarr; Talented Tiffany
                </h3>
                <p className="userInterviewDescr">
                    Talented Tiffany is a student and a member of a performing arts
                    group that often practices in the auditorium. Various members of
                    the group have needed to connect to the multimedia interface in
                    the past to play music or a video for the group during 
                    practices. Tiffany, being a new member of the group, was still a
                    little unfamiliar with the interface and faced some issues 
                    connecting to it. While she understood that she needed to 
                    connect her laptop using the cables provided with the interface,
                    she had trouble working with the audio settings and had to ask 
                    her friends to help. She found it easy to connect to the system
                    but wasn't sure how its volume controls interacted with those on
                    her laptop, and but felt more comfortable using the system after
                    she understood what was going on. <br/><br/>
                    Tiffany did indeed take some time getting connected to the 
                    system, and frequently looked at the projector screen and the 
                    projector itself after doing something on her laptop or the 
                    screen attached to the interface. She went through a similar 
                    process with the audio controls, playing the audio a few times 
                    and adjusting something on her screen or the multimedia system's
                    screen after. 
                </p>
            </div>
            <div className="imageSection">
                <h2>
                    Personas and Empathy Maps
                </h2>
                <div className = "personas">
                    <img className="personaScan" src={process.env.PUBLIC_URL + "/assets1/Sam.jpg"} alt="Scan of an empathy map for Scrambling Sam"/>
                    <img className="personaScan" src={process.env.PUBLIC_URL + "/assets1/Wendy.jpg"} alt="Scan of an empathy map for Tech-Savvy Tim"/>
                    <p className="personaDescr">
                        Scrambling Sam is a young lady who's not comfortable with 
                        technology. Today, she's rushing to finish teaching all the 
                        content she has planned before a hard deadline set by a 
                        an examination. <br/>
                        Sam is a frequent user of the interface, but she usually
                        only uses it to share text presentations. Today, 
                        Sam is trying to show a video to teach a concept to her 
                        class, but she's having trouble getting associated audio to 
                        play. She's not sure what the origin of the issue is and the
                        pressure for time is causing her to scramble. <br/>
                        Sam represents the users who reported running into issues 
                        with settings on the interface. She also represents users 
                        who said they sometimes felt distressed or upset when trying
                        to resolve issues with the interface. <br/>
                    </p>
                    <p className="personaDescr">
                        Whiz-Kid Wendy is a young lady who enjoys problem-solving. 
                        She's trying to figure out how to use the interface before 
                        a big presentation so she can iron out as many kinks as 
                        possible. <br/>
                        Wendy can't figure out why her laptop is not connecting to
                        the interface. She tried using the cables provided and still
                        wasn't able to get the projector to show what was on her
                        screen. She's not sure what the issue is and she can't find 
                        many clues around her to help her troubleshoot. <br/>
                        Wendy represents users who are comfortable with technology,
                        even unfamiliar forms, but may still occasionally face 
                        technical problems. She also represents users who are 
                        sometimes stumped by problems that have no obvious diagnosis.
                    </p>
                </div>
            </div>
            <div className = "imageSection">	
                <h2>
                    Storyboard
                </h2>
                <p>
                    Here is a storyboard showing Sam's experience on the unfortunate
                    morning she faced issues with the interface while teaching some
                    important material. 
                </p>
                <img className="storyboard" src={process.env.PUBLIC_URL + "/assets1/Storyboard.jpg"} alt="Scan of a storyboard for Scrambling Sam"/>
            </div>

        </div>
    );
    };

    export default Personas;