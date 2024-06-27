import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/shop.png";
import editor from "../../Assets/Projects/dalily.png";
import chatify from "../../Assets/Projects/to do.png";
import suicide from "../../Assets/Projects/store.png";
import bitsOfCode from "../../Assets/Projects/moazea.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="تطبيق لعمل المهام"
              description="قوائم المهام يمكن أن تكون بسيطة مثل قائمة مكتوبة باليد على ورقة، أو أكثر تطورًا باستخدام أدوات رقمية مثل تطبيقات الملاحظات أو التقويم أو برامج إدارة المهام المخصصة. الأمر الأساسي هو إيجاد النظام الذي يناسبك ويساعدك على البقاء منظمًا وفعالًا.
"

              ghLink="https://github.com/MOhamed14564156/todo-list"
              demoLink="https://mohamed14564156.github.io/todo-list/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="موقع الموعظة "
              description="هذا التطبيق الإسلامي يهدف إلى تقديم محتوى ديني مفيد وشامل للمستخدمين، مما يساعد على تعزيز الممارسات الدينية والروحية لديهم ، وهو عبارة عن تطبيق يقوم بعرض بعض من الاحاديث الاسلامية وعرض القران الكريم كاملا ومواعيد الاذان حسب توقيت القاهرة وبعض من الخطب الدينية و ايات القران و مدح النبي و فضل رمضان
"
              ghLink="https://github.com/MOhamed14564156/Quraan"
              demoLink="https://mohamed14564156.github.io/Quraan/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="موقع دليلي "
              description=" دليل شامل لمركز الإبراهيمية في محافظة الشرقية، مصر. نسعى لتقديم معلومات موثوقة وسهلة الوصول حول مختلف الخدمات والاحتياجات التي قد يبحث عنها سكان المركز."
              ghLink="https://github.com/MOhamed14564156/Dalily.com"
              demoLink="https://mohamed14564156.github.io/Dalily.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="موقع ملابس اونلاين"
              description="موقع لشراء الملابس اونلاين بواسطة لغات يقدم تشكيلة واسعة ومتنوعة من الملابس والاكسسوارات للرجال والنساء والأطفال لديه وجود قوي على وسائل التواصل الاجتماعي لتفاعل العملاء مع العلامة التجارية خياراً موثوقاً وشعبياً للتسوق عبر الإنترنت للحصول على ملابس "
              demoLink="https://mohamed14564156.github.io/shooping-online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="App store"
              description=""
              ghLink="https://github.com/MOhamed14564156/Card_title"
              demoLink="https://mohamed14564156.github.io/Card_title/" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
