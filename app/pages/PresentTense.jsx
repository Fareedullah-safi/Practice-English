'use client';
import React from 'react';

const presentTenses = [
    {
        title: "1. Present Simple (Indefinite) Tense",
        formulas: [
            "Affirmative: Subject + 1st form of verb + s/es + Object",
            "Negative: Subject + do/does + not + 1st form of verb + Object",
            "Interrogative: Do/Does + Subject + 1st form of verb + Object + ?",
            "Negative Interrogative: Do/Does + Subject + not + 1st form of verb + Object + ?"
        ],
        examples : [
            { urdu: "میں اسکول جاتا ہوں", english: "I go to school." },
            { urdu: "وہ روزانہ ورزش کرتا ہے", english: "He exercises daily." },
            { urdu: "ہم کتابیں پڑھتے ہیں", english: "We read books." },
            { urdu: "تم انگریزی بولتے ہو", english: "You speak English." },
            { urdu: "وہ خوبصورتی سے گاتی ہے", english: "She sings beautifully." },
            { urdu: "بچے کھیلتے ہیں", english: "Children play." },
            { urdu: "میں پانی نہیں پیتا", english: "I do not drink water." },
            { urdu: "وہ کھانا نہیں پکاتی", english: "She does not cook food." },
            { urdu: "کیا وہ اسکول جاتا ہے؟", english: "Does he go to school?" },
            { urdu: "کیا بچے کھیلتے ہیں؟", english: "Do children play?" },
            { urdu: "ہم روزانہ چہل قدمی کرتے ہیں", english: "We walk daily." },
            { urdu: "کیا میں دوستوں سے ملتا ہوں؟", english: "Do I meet friends?" },
            { urdu: "میں اسکول نہیں جاتا", english: "I do not go to school." },
            { urdu: "وہ کتاب نہیں پڑھتا", english: "He does not read a book." },
            { urdu: "ہم نہیں کھیلتے", english: "We do not play." },
            { urdu: "کیا وہ انگریزی بولتی ہے؟", english: "Does she speak English?" },
            { urdu: "کیا تم پانی پیتے ہو؟", english: "Do you drink water?" },
            { urdu: "کیا وہ خوبصورتی سے گاتی ہے؟", english: "Does she sing beautifully?" },
            { urdu: "میں ہمیشہ سچ بولتا ہوں", english: "I always tell the truth." },
            { urdu: "ہم مسجد جاتے ہیں", english: "We go to the mosque." },
            { urdu: "کیا وہ ہر جمعہ کو آتی ہے؟", english: "Does she come every Friday?" },
            { urdu: "وہ والدین کی عزت کرتا ہے", english: "He respects parents." },
            { urdu: "کیا بچے اسکول نہیں جاتے؟", english: "Do children not go to school?" },
            { urdu: "میں وقت پر پہنچتا ہوں", english: "I reach on time." },
            { urdu: "کیا تم موبائل استعمال کرتے ہو؟", english: "Do you use a mobile?" },
            { urdu: "کیا میں کھانا بناتا ہوں؟", english: "Do I cook food?" },
            { urdu: "وہ سچ نہیں بولتا", english: "He does not tell the truth." },
            { urdu: "ہم کام مکمل کرتے ہیں", english: "We complete work." },
            { urdu: "کیا وہ پارک میں جاتا ہے؟", english: "Does he go to the park?" },
            { urdu: "میں دوستوں کو فون کرتا ہوں", english: "I call friends." },
            { urdu: "کیا وہ ورزش نہیں کرتا؟", english: "Does he not exercise?" },
            { urdu: "کیا تم شام کو باہر جاتے ہو؟", english: "Do you go out in the evening?" },
            { urdu: "وہ اپنا ہوم ورک کرتا ہے", english: "He does his homework." },
            { urdu: "میں روز اخبار پڑھتا ہوں", english: "I read the newspaper daily." },
            { urdu: "کیا وہ فلم دیکھتی ہے؟", english: "Does she watch a movie?" },
            { urdu: "ہم انگریزی سیکھتے ہیں", english: "We learn English." },
            { urdu: "میں صبح جلدی اٹھتا ہوں", english: "I wake up early." },
            { urdu: "کیا بچے اسکول میں پڑھتے ہیں؟", english: "Do children study in school?" },
            { urdu: "کیا وہ کافی پیتا ہے؟", english: "Does he drink coffee?" },
            { urdu: "ہم ہر روز کام پر جاتے ہیں", english: "We go to work every day." },
            { urdu: "وہ ہمیشہ دیر سے آتا ہے", english: "He always comes late." },
            { urdu: "کیا میں تمہیں پسند کرتا ہوں؟", english: "Do I like you?" },
            { urdu: "کیا وہ باغ میں جاتا ہے؟", english: "Does he go to the garden?" },
            { urdu: "کیا تم موبائل نہیں چلاتے؟", english: "Do you not use the mobile?" },
            { urdu: "ہم ہفتے کے دن کام کرتے ہیں", english: "We work on weekdays." },
            { urdu: "کیا تم کھیلتے ہو؟", english: "Do you play?" },
            { urdu: "وہ کبھی نہیں جھوٹ بولتا", english: "He never tells a lie." },
            { urdu: "میں سبزی خریدتا ہوں", english: "I buy vegetables." },
            { urdu: "کیا وہ بس لیتا ہے؟", english: "Does he take the bus?" },
            { urdu: "ہم اپنا کام ختم کرتے ہیں", english: "We finish our work." },
            { urdu: "کیا تم کتاب پڑھتے ہو؟", english: "Do you read a book?" },
            { urdu: "میں صبح ناشتا کرتا ہوں", english: "I eat breakfast in the morning." },
            { urdu: "کیا تم اپنے دوستوں سے ملتے ہو؟", english: "Do you meet your friends?" },
            { urdu: "کیا وہ روز شام کو آتی ہے؟", english: "Does she come every evening?" },
            { urdu: "ہم وقت پر سوتے ہیں", english: "We sleep on time." },
            { urdu: "کیا میں سوال پوچھتا ہوں؟", english: "Do I ask questions?" },
            { urdu: "وہ کمپیوٹر استعمال کرتا ہے", english: "He uses the computer." },
            { urdu: "کیا تم میوزک سنتے ہو؟", english: "Do you listen to music?" },
            { urdu: "میں ہفتہ وار فلم دیکھتا ہوں", english: "I watch a movie weekly." },
            { urdu: "کیا بچے گانا گاتے ہیں؟", english: "Do children sing songs?" }
        ]
    },
    {
        title: "2. Present Continuous Tense",
        formulas: [
            "Affirmative: Subject + is/am/are + Verb+ing + Object",
            "Negative: Subject + is/am/are + not + Verb+ing + Object",
            "Interrogative: Is/Am/Are + Subject + Verb+ing + Object + ?",
            "Negative Interrogative: Is/Am/Are + Subject + not + Verb+ing + Object + ?"
        ],
        examples: [
            { urdu: "میں کھانا کھا رہا ہوں", english: "I am eating food." },
            { urdu: "ہم کھیل رہے ہیں", english: "We are playing." },
            { urdu: "وہ پڑھ رہا ہے", english: "He is reading." },
            { urdu: "تم کام کر رہے ہو", english: "You are working." },
            { urdu: "وہ سو رہی ہے", english: "She is sleeping." },
            { urdu: "بچے گانا گا رہے ہیں", english: "Children are singing." },
            { urdu: "میں پانی پی رہا ہوں", english: "I am drinking water." },
            { urdu: "ہم مطالعہ کر رہے ہیں", english: "We are studying." },
            { urdu: "کیا میں بات کر رہا ہوں؟", english: "Am I speaking?" },
            { urdu: "کیا وہ کھانا نہیں کھا رہا؟", english: "Is he not eating food?" },
            { urdu: "میں ٹی وی دیکھ رہا ہوں", english: "I am watching TV." },
            { urdu: "تم کتاب پڑھ رہے ہو", english: "You are reading a book." },
            { urdu: "ہم فلم دیکھ رہے ہیں", english: "We are watching a movie." },
            { urdu: "وہ اپنے دوست سے بات کر رہا ہے", english: "He is talking to his friend." },
            { urdu: "کیا بچے کھیل رہے ہیں؟", english: "Are the children playing?" },
            { urdu: "کیا میں کمپیوٹر استعمال کر رہا ہوں؟", english: "Am I using the computer?" },
            { urdu: "میں موسیقی سن رہا ہوں", english: "I am listening to music." },
            { urdu: "کیا وہ پڑھ نہیں رہی؟", english: "Is she not reading?" },
            { urdu: "ہم چائے پی رہے ہیں", english: "We are drinking tea." },
            { urdu: "وہ باغ میں چل رہی ہے", english: "She is walking in the garden." },
            { urdu: "کیا تم سوتے نہیں ہو؟", english: "Are you not sleeping?" },
            { urdu: "میں آج کل زیادہ کام کر رہا ہوں", english: "I am working more these days." },
            { urdu: "کیا ہم سفر کر رہے ہیں؟", english: "Are we traveling?" },
            { urdu: "وہ بازار جا رہا ہے", english: "He is going to the market." },
            { urdu: "کیا بچے شور کر رہے ہیں؟", english: "Are the children making noise?" },
            { urdu: "میں ورزش کر رہا ہوں", english: "I am exercising." },
            { urdu: "تم پڑھ نہیں رہے ہو", english: "You are not studying." },
            { urdu: "وہ ہنس رہا ہے", english: "He is laughing." },
            { urdu: "کیا ہم ناچ رہے ہیں؟", english: "Are we dancing?" },
            { urdu: "کیا میں فون پر بات کر رہا ہوں؟", english: "Am I talking on the phone?" },
            { urdu: "کیا وہ دوڑ رہی ہے؟", english: "Is she running?" },
            { urdu: "ہم بازار میں خریداری کر رہے ہیں", english: "We are shopping in the market." },
            { urdu: "بچے اسکول جا رہے ہیں", english: "The children are going to school." },
            { urdu: "کیا تم لکھ رہے ہو؟", english: "Are you writing?" },
            { urdu: "میں کتاب لکھ رہا ہوں", english: "I am writing a book." },
            { urdu: "کیا وہ انگریزی سیکھ رہی ہے؟", english: "Is she learning English?" },
            { urdu: "کیا ہم گانا نہیں گا رہے؟", english: "Are we not singing?" },
            { urdu: "کیا وہ سو نہیں رہی؟", english: "Is she not sleeping?" },
            { urdu: "تم مجھے کال کر رہے ہو", english: "You are calling me." },
            { urdu: "کیا بچے ہنس رہے ہیں؟", english: "Are the children laughing?" },
            { urdu: "میں اخبار پڑھ رہا ہوں", english: "I am reading the newspaper." },
            { urdu: "کیا ہم ٹی وی دیکھ رہے ہیں؟", english: "Are we watching TV?" },
            { urdu: "کیا وہ تمہیں نظرانداز کر رہی ہے؟", english: "Is she ignoring you?" },
            { urdu: "ہم بات چیت کر رہے ہیں", english: "We are having a conversation." },
            { urdu: "کیا تم دفتر جا رہے ہو؟", english: "Are you going to the office?" },
            { urdu: "کیا میں زیادہ کام کر رہا ہوں؟", english: "Am I working a lot?" },
            { urdu: "وہ روزانہ ورزش کر رہا ہے", english: "He is exercising daily." },
            { urdu: "کیا بچے کھیل کا میدان جا رہے ہیں؟", english: "Are the children going to the playground?" },
            { urdu: "کیا ہم ہوٹل میں کھا رہے ہیں؟", english: "Are we eating at the hotel?" },
            { urdu: "میں تمہارا انتظار کر رہا ہوں", english: "I am waiting for you." },
            { urdu: "کیا وہ تمہیں دیکھ رہی ہے؟", english: "Is she looking at you?" },
            { urdu: "کیا تم کچھ نہیں کر رہے ہو؟", english: "Are you not doing anything?" },
            { urdu: "ہم جلدی اٹھ رہے ہیں", english: "We are waking up early." },
            { urdu: "کیا میں گھر جا رہا ہوں؟", english: "Am I going home?" },
            { urdu: "کیا تم دیر کر رہے ہو؟", english: "Are you getting late?" },
            { urdu: "میں نیا کورس سیکھ رہا ہوں", english: "I am learning a new course." }
        ]
    },
    {
        title: "3. Present Perfect Tense",
        formulas: [
            "Affirmative: Subject + has/have + 3rd form of verb + Object",
            "Negative: Subject + has/have + not + 3rd form of verb + Object",
            "Interrogative: Has/Have + Subject + 3rd form of verb + Object + ?",
            "Negative Interrogative: Has/Have + Subject + not + 3rd form of verb + Object + ?"
        ],

        examples: [
            { urdu: "میں نے کھانا کھا لیا ہے", english: "I have eaten food." },
            { urdu: "ہم نے کام مکمل کر لیا ہے", english: "We have completed the work." },
            { urdu: "اس نے کتاب پڑھ لی ہے", english: "He has read the book." },
            { urdu: "تم نے مجھے فون کیا ہے", english: "You have called me." },
            { urdu: "وہ جا چکی ہے", english: "She has gone." },
            { urdu: "میں نے تمہاری مدد کی ہے", english: "I have helped you." },
            { urdu: "ہم نے سبق یاد کر لیا ہے", english: "We have memorized the lesson." },
            { urdu: "کیا میں نے سوال کا جواب دیا ہے؟", english: "Have I answered the question?" },
            { urdu: "کیا ہم نے سب کچھ ٹھیک کیا ہے؟", english: "Have we fixed everything?" },
            { urdu: "کیا اس نے کھانا نہیں کھایا ہے؟", english: "Has he not eaten food?" },
            { urdu: "میں نے آج اخبار پڑھا ہے", english: "I have read the newspaper today." },
            { urdu: "ہم نے نیا کورس شروع کیا ہے", english: "We have started a new course." },
            { urdu: "کیا تم نے یہ فلم دیکھی ہے؟", english: "Have you watched this movie?" },
            { urdu: "کیا وہ بازار گئی ہے؟", english: "Has she gone to the market?" },
            { urdu: "میں نے تمہیں پہلے بتایا ہے", english: "I have told you before." },
            { urdu: "ہم نے ہمیشہ سچ بولا ہے", english: "We have always spoken the truth." },
            { urdu: "کیا تم نے کبھی انگلینڈ کا سفر کیا ہے؟", english: "Have you ever traveled to England?" },
            { urdu: "میں نے تمہارے لیے تحفہ خریدا ہے", english: "I have bought a gift for you." },
            { urdu: "ہم نے اپنے کمرے کی صفائی کی ہے", english: "We have cleaned our room." },
            { urdu: "کیا اس نے نئی کار خریدی ہے؟", english: "Has he bought a new car?" },
            { urdu: "کیا میں نے تمہاری مدد نہیں کی ہے؟", english: "Have I not helped you?" },
            { urdu: "انہوں نے نیا گھر بنا لیا ہے", english: "They have built a new house." },
            { urdu: "میں نے تمہارے خط کا جواب دے دیا ہے", english: "I have replied to your letter." },
            { urdu: "کیا ہم نے سبق یاد نہیں کیا؟", english: "Have we not memorized the lesson?" },
            { urdu: "کیا وہ اب تک گھر پہنچا ہے؟", english: "Has he reached home yet?" },
            { urdu: "میں نے اپنا کام ختم کر لیا ہے", english: "I have finished my work." },
            { urdu: "کیا تم نے مجھے بلایا ہے؟", english: "Have you called me?" },
            { urdu: "ہم نے بہت سی کتابیں خریدی ہیں", english: "We have bought many books." },
            { urdu: "انہوں نے باغ میں درخت لگائے ہیں", english: "They have planted trees in the garden." },
            { urdu: "کیا میں نے تمہیں پہلے خبردار نہیں کیا؟", english: "Have I not warned you before?" },
            { urdu: "میں نے ہمیشہ محنت کی ہے", english: "I have always worked hard." },
            { urdu: "ہم نے ایک ساتھ بہت سفر کیا ہے", english: "We have traveled a lot together." },
            { urdu: "انہوں نے نئی فلم دیکھی ہے", english: "They have watched the new movie." },
            { urdu: "کیا تم نے اپنی رپورٹ جمع کرا دی ہے؟", english: "Have you submitted your report?" },
            { urdu: "میں نے نیا موبائل خریدا ہے", english: "I have bought a new mobile." },
            { urdu: "ہم نے تمام سبق مکمل کر لیے ہیں", english: "We have completed all lessons." },
            { urdu: "کیا تم نے اپنا کام شروع کیا ہے؟", english: "Have you started your work?" },
            { urdu: "انہوں نے ہمیشہ میری مدد کی ہے", english: "They have always helped me." },
            { urdu: "کیا اس نے کبھی جھوٹ بولا ہے؟", english: "Has he ever told a lie?" },
            { urdu: "میں نے اپنے دوست کو خط لکھا ہے", english: "I have written a letter to my friend." },
            { urdu: "ہم نے شام کا کھانا کھا لیا ہے", english: "We have eaten dinner." },
            { urdu: "انہوں نے ابھی تک تیاری مکمل نہیں کی", english: "They have not prepared yet." },
            { urdu: "کیا میں نے تمہاری فیس جمع کرا دی ہے؟", english: "Have I submitted your fee?" },
            { urdu: "میں نے اپنی کتاب واپس دے دی ہے", english: "I have returned my book." },
            { urdu: "ہم نے کئی بار یہ جگہ دیکھی ہے", english: "We have seen this place many times." },
            { urdu: "کیا تم نے یہ کام نہیں کیا؟", english: "Have you not done this work?" },
            { urdu: "میں نے ہمیشہ سچ بولا ہے", english: "I have always spoken the truth." },
            { urdu: "کیا ہم نے تمہیں پہلے سمجھایا ہے؟", english: "Have we explained to you before?" },
            { urdu: "انہوں نے اپنی نوکری چھوڑ دی ہے", english: "They have left their job." },
            { urdu: "کیا میں نے تمہاری کتاب واپس کر دی ہے؟", english: "Have I returned your book?" },
            { urdu: "ہم نے اپنا کام وقت پر مکمل کیا ہے", english: "We have completed our work on time." },
            { urdu: "کیا تم نے نئی فلم دیکھی ہے؟", english: "Have you watched the new movie?" },
            { urdu: "میں نے اپنی تعلیم مکمل کر لی ہے", english: "I have completed my education." },
            { urdu: "کیا اس نے سب کو معاف کر دیا ہے؟", english: "Has he forgiven everyone?" },
            { urdu: "ہم نے ہمیشہ ایک دوسرے کی مدد کی ہے", english: "We have always helped each other." },
            { urdu: "کیا تم نے اپنی فائل تیار کی ہے؟", english: "Have you prepared your file?" },
            { urdu: "انہوں نے ہم سے وعدہ کیا ہے", english: "They have promised us." }
        ]
    },
    {
        title: "4. Present Perfect Continuous Tense",
        formulas: [
            "Affirmative: Subject + has/have + been + Verb+ing + Object + since/for + time",
            "Negative: Subject + has/have + not + been + Verb+ing + Object + since/for + time",
            "Interrogative: Has/Have + Subject + been + Verb+ing + Object + since/for + time + ?",
            "Negative Interrogative: Has/Have + Subject + not + been + Verb+ing + Object + since/for + time + ?"
        ],
        examples: [
            { urdu: "میں دو گھنٹوں سے پڑھ رہا ہوں", english: "I have been studying for two hours." },
            { urdu: "ہم صبح سے کام کر رہے ہیں", english: "We have been working since morning." },
            { urdu: "وہ ایک گھنٹے سے کھیل رہا ہے", english: "He has been playing for an hour." },
            { urdu: "تم شام سے محنت کر رہے ہو", english: "You have been working hard since evening." },
            { urdu: "وہ دو دنوں سے بیمار ہے", english: "She has been being sick for two days." },
            { urdu: "میں صبح سے تمہارا انتظار کر رہا ہوں", english: "I have been waiting for you since morning." },
            { urdu: "ہم کئی دنوں سے پڑھائی کر رہے ہیں", english: "We have been studying for several days." },
            { urdu: "کیا میں دو گھنٹوں سے پڑھ رہا ہوں؟", english: "Have I been studying for two hours?" },
            { urdu: "کیا ہم صبح سے کام کر رہے ہیں؟", english: "Have we been working since morning?" },
            { urdu: "کیا وہ ایک گھنٹے سے کھیل رہا ہے؟", english: "Has he been playing for an hour?" },
            { urdu: "کیا تم شام سے محنت کر رہے ہو؟", english: "Have you been working hard since evening?" },
           {urdu: "کیا وہ دو دنوں سے بیمار ہے؟", english: "She has been sick for two days."},
            { urdu: "کیا میں صبح سے تمہارا انتظار کر رہا ہوں؟", english: "Have I been waiting for you since morning?" },
            { urdu: "کیا ہم کئی دنوں سے پڑھائی کر رہے ہیں؟", english: "Have we been studying for several days?" },
            { urdu: "میں دو گھنٹوں سے نہیں پڑھ رہا", english: "I have not been studying for two hours." },
            { urdu: "ہم صبح سے کام نہیں کر رہے", english: "We have not been working since morning." },
            { urdu: "وہ ایک گھنٹے سے نہیں کھیل رہا", english: "He has not been playing for an hour." },
            { urdu: "تم شام سے محنت نہیں کر رہے", english: "You have not been working hard since evening." },
            { urdu: "وہ دو دنوں سے بیمار نہیں ہے", english: "She has not been being sick for two days." },
            { urdu: "میں صبح سے تمہارا انتظار نہیں کر رہا", english: "I have not been waiting for you since morning." },
            { urdu: "ہم کئی دنوں سے پڑھائی نہیں کر رہے", english: "We have not been studying for several days." },
            { urdu: "کیا میں دو گھنٹوں سے نہیں پڑھ رہا؟", english: "Have I not been studying for two hours?" },
            { urdu: "کیا ہم صبح سے کام نہیں کر رہے؟", english: "Have we not been working since morning?" },
            { urdu: "کیا وہ ایک گھنٹے سے نہیں کھیل رہا؟", english: "Has he not been playing for an hour?" },
            { urdu: "کیا تم شام سے محنت نہیں کر رہے؟", english: "Have you not been working hard since evening?" },
            { urdu: "کیا وہ دو دنوں سے بیمار نہیں ہے؟", english: "Has she not been being sick for two days?" },
            { urdu: "کیا میں صبح سے تمہارا انتظار نہیں کر رہا؟", english: "Have I not been waiting for you since morning?" },
            { urdu: "کیا ہم کئی دنوں سے پڑھائی نہیں کر رہے؟", english: "Have we not been studying for several days?" },
            { urdu: "میں تین گھنٹوں سے کمپیوٹر استعمال کر رہا ہوں", english: "I have been using the computer for three hours." },
            { urdu: "وہ صبح سے گانے گا رہی ہے", english: "She has been singing since morning." },
            { urdu: "ہم ایک گھنٹے سے ہنس رہے ہیں", english: "We have been laughing for an hour." },
            { urdu: "میں صبح سے اپنا ہوم ورک کر رہا ہوں", english: "I have been doing my homework since morning." },
            { urdu: "وہ کل سے پاکستان میں رہ رہا ہے", english: "He has been living in Pakistan since yesterday." },
            { urdu: "ہم دو دنوں سے کھیل رہے ہیں", english: "We have been playing for two days." },
            { urdu: "کیا میں تین گھنٹوں سے کمپیوٹر استعمال کر رہا ہوں؟", english: "Have I been using the computer for three hours?" },
            { urdu: "کیا وہ صبح سے گانے گا رہی ہے؟", english: "Has she been singing since morning?" },
            { urdu: "کیا ہم ایک گھنٹے سے ہنس رہے ہیں؟", english: "Have we been laughing for an hour?" },
            { urdu: "کیا میں صبح سے اپنا ہوم ورک کر رہا ہوں؟", english: "Have I been doing my homework since morning?" },
            { urdu: "کیا وہ کل سے پاکستان میں رہ رہا ہے؟", english: "Has he been living in Pakistan since yesterday?" },
            { urdu: "کیا ہم دو دنوں سے کھیل رہے ہیں؟", english: "Have we been playing for two days?" },
            { urdu: "میں تین گھنٹوں سے کمپیوٹر استعمال نہیں کر رہا", english: "I have not been using the computer for three hours." },
            { urdu: "وہ صبح سے گانے نہیں گا رہی", english: "She has not been singing since morning." },
            { urdu: "ہم ایک گھنٹے سے نہیں ہنس رہے", english: "We have not been laughing for an hour." },
            { urdu: "میں صبح سے اپنا ہوم ورک نہیں کر رہا", english: "I have not been doing my homework since morning." },
            { urdu: "وہ کل سے پاکستان میں نہیں رہ رہا", english: "He has not been living in Pakistan since yesterday." },
            { urdu: "ہم دو دنوں سے نہیں کھیل رہے", english: "We have not been playing for two days." }
        ]
    }
];

const TensesPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 space-y-10">
            <h1 className="text-4xl font-bold text-center mb-6">All Present Tense - Formulas & Examples</h1>

            {presentTenses.map((tense, idx) => (
                <div key={idx} className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-lg">

                    <h2 className="text-2xl font-semibold text-blue-400">{tense.title}</h2>

                    <div className="space-y-1 text-lg">
                        {tense.formulas.map((formula, index) => (
                            <p key={index} className="text-green-400">{formula}</p>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {tense.examples.map((ex, i) => (
                            <div key={i} className="p-4 bg-gray-700 rounded-xl group hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <p className="text-lg">{ex.urdu}</p>
                                <p className="text-green-400 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">{ex.english}</p>
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default TensesPage;
