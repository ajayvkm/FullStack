/*For now hardcoded information in MAP - Later will move it JSON file*/
const studentInfo = [{name: 'AJAY MAHESH VISHWAKARMA', imageurl: "images/Ajay.jpg", intro: "Software Development Engineer with 10+ years of experience. I am having Bachelor of Science degree in the area of Computer Science. Now pursuing Advanced Certification later wishing to complete my Master of Science degree.", githuburl: ""}];
const studentData = studentInfo.map(({name, imageurl, intro, githuburl}) =>
    <table>
        <tbody>
        <tr>
            <td>{name}</td>
        </tr>
        <tr>
            <td><img src={imageurl} align="center" /></td>
        </tr>
        <tr>
            <td>{intro}</td>
        </tr>
        <tr>
            <td><a href={githuburl}>VIEW MY GITHUB REPO </a></td>
        </tr>
        </tbody>
    </table>
);

ReactDOM.render(studentData, document.getElementById('contents'));