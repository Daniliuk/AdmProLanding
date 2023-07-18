import AboutUsCss from './AboutUsBox.module.css'

function AboutUsBox() {
  return (
      <div className={AboutUsCss.AboutUsContainer}>
          {/* <div className={AboutUsCss.Top}> */}
              <div className={AboutUsCss.TextBox}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam voluptate ea odit laudantium obcaecati ut cum. Culpa doloremque voluptates quasi necessitatibus dicta unde repellat deserunt pariatur ratione iusto aliquam quam, asperiores vero ipsam eligendi facilis beatae a modi tempore velit exercitationem ipsa ad? Modi, ipsum quasi libero voluptates impedit tempore perferendis laudantium eius reprehenderit repellat assumenda totam, quod fuga non?
              </div>
          {/* </div> */}
          {/* <div className={AboutUsCss.Bottom}> */}
              <div className={AboutUsCss.ButtonBox}>
                <button>Link to Us</button>
              </div>
              <div className={AboutUsCss.ImageBox}>
                About us image
              </div>
          {/* </div> */}

      </div>
  );
}
export default AboutUsBox;