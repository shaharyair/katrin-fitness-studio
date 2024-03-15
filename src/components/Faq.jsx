import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

// TODO: example questions and answers, will be updated soon
const questions = [
  {
    question: "כמה זמן לוקח לראות תוצאות?",
    answer:
      "הרצון הטבעי שלנו הוא לראות מיד תוצאות, כאן ועכשיו! אני פה כדי להגיד את האמת ורק את האמת. תוצאות יתקבלו אם תלכו לפי הכללים, אם תשקיעו ותהיו עמוק בתהליך, מהר זה יקרה. אין קסם ואין קיצורי דרך. התוצאות הן שונות מאדם לאדם ולכל אחד גוף שבנוי אחרת עם יכולות אחרות וכן גם גנים שונים ולכן יכול להיות שהחברה שהתחילה איתכן בתהליך תרד מהר יותר במשקל ותראה תוצאות מהר יותר ולך יקח קצת יותר זמן, אל תתייאשו!",
  },
  {
    question: "אם ארים משקולות אהיה שרירית מידי?",
    answer:
      "זאת מחשבה נפוצה מאוד בקרב נשים והתשובה לכך היא ברורה מאוד - אם לא תרצי בכך זה לא יקרה! הגעה למראה השרירי והנפוח לא קלה בכלל ודורשת מאמץ רב והשקעה רבה. יש להקפיד על תזונה מותאמת ואימונים מאוד ספציפים, בשורה תחתונה אם לא תרצי להיראות כמו רמבו אז הסיכוי לכך שזה יקרה הוא אפסי! הרמת משקולות מטרתה היא לעצב את הגוף ולכן אל תפחדו מזה ולהיפך חבקו את זה באהבה.",
  },
  {
    question: "מה היתרונות באימון פילאטיס מכשירים?",
    answer:
      "היעילות של פילאטיס מכשירים  בהשגת תוצאות רצויות היא היבט מרכזי שיש להבין. מכשירי פילאטיס נועדו להוסיף שכבה נוספת של אתגר וגיוון לאימונים שלך, ולאפשר תוצאות מהירות ויעילות יותר. פרק זה יבדוק את המצבים בהם אימון פילאטיס מכשירים יכול להיות מועיל יותר.    יתרון העיקרי של אימון פילאטיס מכשירים הוא היכולת להתמקד בשרירים ספציפיים בדיוק רב יותר מאשר אימון פילאטיס מסורתי מבוסס מזרן. מכשירים כמו רפורמר, קדילק או כיסא מציעים סביבה מבוקרת יותר לתרגול תנועות פילאטיס מורכבות, התמקדות בקבוצות שרירים בודדות וקידום פיתוח שרירים מאוזן. בתורו, זה עוזר להשיג טונוס שרירים טוב יותר, יציבה, גמישות, ושיווי משקל.",
  },
  {
    question: "האם אפשר לשרוף שומן מאזור מסוים בגוף?",
    answer:
      "הלוואי, לא זו אינה תוכנית כבקשתך ואין אפשרות לשרוף שומן ממקום מסוים. שומנים מצטברים בכל מקום בגוף ועל מנת לשרוף אחוזי שומן יש לבצע שינוי על ידי תזונה בריאה דלת שומן ופחמימות.",
  },
  {
    question: "האם מספיק רק להתאמן כדי לרדת במשקל?",
    answer:
      "אימון זאת התחלה נהדרת כדי להגיע ליעד אבל בהחלט לא מספיק! הנטייה היא לחשוב אם התאמנתי אני יכולה לאכול מה שאני רוצה, אז זהו שלא. אם תעשי כך סביר להניח שלא תראי תוצאות כלל. תזונה נכונה וספורט הן ללא ספק מילים שהולכות יחד יד ביד וקשורות אחת בשניה בקשר הדוק. התזונה צריכה להיות תואמת לכל אחד ואחת באופן אישי ולפי ההעדפות האישיות שלו.",
  },
  {
    question: "מדוע חשוב לשמור על תזונה בריאה, במקביל לשמירה על כושר?",
    answer:
      "יש ללוות את הפעילות הגופנית בשמירה על תזונה בריאה דלת שומן ופחמימות מכיוון שאיש לא יבחין במבנה השרירים שנוצרו בעקבות אימונים מפרכים אם סביבם תהיה רקמת שומן שתסתיר אותם.",
  },
  {
    question: "מתי מתחילים לשרוף קלוריות בפעילות גופנית מסוג אירובי ואנאירובי?",
    answer:
      "הגוף שורף קלוריות בכל רגע נתון, כמות הקלוריות שנשרפת תלויה בעוצמת הפעילות: ככל שהפעילות אינטנסיבית יותר, כך הגוף ישרוף יותר קלוריות.",
  },
];

const text = { title: "יש לך שאלות ?" };

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full bg-black py-10" id="qna">
      <div className="container">
        <h1
          style={{ direction: "rtl" }}
          className="mb-4 text-center text-2xl text-primary lg:text-4xl"
        >
          {text.title}
        </h1>
        <div className="m-auto grid w-full place-items-center gap-2 divide-y divide-white font-thin text-white lg:w-4/5">
          {questions.map((item, index) => (
            <div className="w-full" key={index}>
              <button
                className="transition-color flex w-full items-center justify-between p-2 text-right text-xl lg:text-2xl"
                onClick={() => toggleAccordion(index)}
              >
                <div
                  className={`${index === activeIndex && "rotate-180"} transition-transform duration-300 will-change-transform`}
                >
                  <FaAngleUp
                    className={`h-4 w-4 ${index === activeIndex && "text-primary"}`}
                  />
                </div>
                <span
                  style={{ direction: "rtl" }}
                  className={`${index === activeIndex && "text-primary"} w-5/6 font-normal transition-colors duration-300`}
                >
                  {item?.question}
                </span>
              </button>
              <div
                className={`${index === activeIndex && "h-auto"} h-0 overflow-hidden text-right text-lg text-white lg:text-xl`}
              >
                <p style={{ direction: "rtl" }} className="px-2 py-1">
                  {item?.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
