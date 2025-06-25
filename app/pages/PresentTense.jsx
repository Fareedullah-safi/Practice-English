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
            { urdu: "میں چائے پیتا ہوں", english: "I drink tea." },
            { urdu: "وہ فٹبال کھیلتا ہے", english: "He plays football." },
            { urdu: "ہم ٹی وی دیکھتے ہیں", english: "We watch TV." },
            { urdu: "تم اچھی کتابیں پڑھتے ہو", english: "You read good books." },
            { urdu: "وہ روزانہ دفتر جاتا ہے", english: "He goes to the office daily." },
            { urdu: "بچے کارٹون دیکھتے ہیں", english: "Children watch cartoons." },
            { urdu: "میں ورزش نہیں کرتا", english: "I do not exercise." },
            { urdu: "وہ کبھی سچ نہیں بولتی", english: "She never tells the truth." },
            { urdu: "کیا وہ گھر صاف کرتا ہے؟", english: "Does he clean the house?" },
            { urdu: "کیا تم ہر دن لکھتے ہو؟", english: "Do you write every day?" },
            { urdu: "ہم کھیل کے میدان میں جاتے ہیں", english: "We go to the playground." },
            { urdu: "کیا میں اچھی کار چلاتا ہوں؟", english: "Do I drive a good car?" },
            { urdu: "وہ اپنے کپڑے دھوتی ہے", english: "She washes her clothes." },
            { urdu: "میں سست نہیں ہوں", english: "I am not lazy." },
            { urdu: "کیا وہ روزانہ نہاتا ہے؟", english: "Does he take a bath daily?" },
            { urdu: "کیا تم اپنے بھائی کو پسند کرتے ہو؟", english: "Do you like your brother?" },
            { urdu: "ہم ہمیشہ سچ بولتے ہیں", english: "We always speak the truth." },
            { urdu: "کیا وہ تمہیں جانتی ہے؟", english: "Does she know you?" },
            { urdu: "میں کھانا جلدی کھاتا ہوں", english: "I eat food quickly." },
            { urdu: "کیا بچے اسکول کے بعد کھیلتے ہیں؟", english: "Do children play after school?" },
            { urdu: "وہ گھر پر رہتی ہے", english: "She stays at home." },
            { urdu: "میں موبائل نہیں چلاتا", english: "I do not use the mobile." },
            { urdu: "کیا وہ ہر صبح اٹھتا ہے؟", english: "Does he wake up every morning?" },
            { urdu: "ہم اکثر بازار جاتے ہیں", english: "We often go to the market." },
            { urdu: "کیا تم میرے ساتھ کھاتے ہو؟", english: "Do you eat with me?" },
            { urdu: "میں اردو سیکھتا ہوں", english: "I learn Urdu." },
            { urdu: "وہ اپنے والدین کی مدد کرتا ہے", english: "He helps his parents." },
            { urdu: "کیا بچے چاکلیٹ کھاتے ہیں؟", english: "Do children eat chocolate?" },
            { urdu: "کیا تم وقت پر آتے ہو؟", english: "Do you come on time?" },
            { urdu: "میں کبھی دیر نہیں کرتا", english: "I never get late." },
            { urdu: "کیا وہ تمہیں پسند نہیں کرتا؟", english: "Does he not like you?" },
            { urdu: "ہم سیر کو جاتے ہیں", english: "We go for a walk." },
            { urdu: "کیا میں تمہیں یاد کرتا ہوں؟", english: "Do I miss you?" },
            { urdu: "وہ اچھا گانا گاتی ہے", english: "She sings a good song." },
            { urdu: "کیا وہ روز شام کو آتا ہے؟", english: "Does he come every evening?" },
            { urdu: "کیا بچے باہر نہیں کھیلتے؟", english: "Do children not play outside?" },
            { urdu: "ہم اخبار نہیں پڑھتے", english: "We do not read the newspaper." },
            { urdu: "میں روزانہ پیدل چلتا ہوں", english: "I walk daily." },
            { urdu: "کیا تم فلم دیکھتے ہو؟", english: "Do you watch movies?" },
            { urdu: "وہ ہمیشہ مہمانوں کا استقبال کرتی ہے", english: "She always welcomes guests." },
            { urdu: "کیا میں سچ بولتا ہوں؟", english: "Do I tell the truth?" },
            { urdu: "ہم کلاس میں وقت پر آتے ہیں", english: "We come to class on time." },
            { urdu: "کیا تم اپنا کام مکمل کرتے ہو؟", english: "Do you complete your work?" },
            { urdu: "وہ کبھی نہیں پڑھتی", english: "She never studies." },
            { urdu: "میں روزانہ نماز پڑھتا ہوں", english: "I pray daily." },
            { urdu: "کیا بچے اسکول بس لیتے ہیں؟", english: "Do children take the school bus?" },
            { urdu: "کیا تم سگریٹ پیتے ہو؟", english: "Do you smoke?" },
            { urdu: "ہم ہمیشہ صفائی کرتے ہیں", english: "We always clean." },
            { urdu: "میں کبھی کبھی کہانی لکھتا ہوں", english: "I sometimes write stories." },
            { urdu: "کیا وہ بازار جاتا ہے؟", english: "Does he go to the market?" },
            { urdu: "وہ اپنے بال کنگھی کرتا ہے", english: "He combs his hair." },
            { urdu: "کیا تم ہر دن ہنستے ہو؟", english: "Do you laugh every day?" },
            { urdu: "میں اپنی والدہ کی مدد کرتا ہوں", english: "I help my mother." },
            { urdu: "کیا وہ موسیقی سنتی ہے؟", english: "Does she listen to music?" },
            { urdu: "ہم ہر ہفتے دوستوں سے ملتے ہیں", english: "We meet friends every week." },
            { urdu: "کیا میں جلدی سوتا ہوں؟", english: "Do I sleep early?" },
            { urdu: "وہ اپنے کمرے کی صفائی نہیں کرتا", english: "He does not clean his room." }
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
            { urdu: "میں بازار جا رہا ہوں", english: "I am going to the market." },
            { urdu: "ہم پارک میں چل رہے ہیں", english: "We are walking in the park." },
            { urdu: "وہ کتاب لکھ رہا ہے", english: "He is writing a book." },
            { urdu: "تم انگریزی بول رہے ہو", english: "You are speaking English." },
            { urdu: "وہ پانی پی رہی ہے", english: "She is drinking water." },
            { urdu: "بچے اسکول جا رہے ہیں", english: "The children are going to school." },
            { urdu: "میں موسیقی نہیں سن رہا ہوں", english: "I am not listening to music." },
            { urdu: "وہ کھیل نہیں رہی ہے", english: "She is not playing." },
            { urdu: "کیا ہم کھانا پکا رہے ہیں؟", english: "Are we cooking food?" },
            { urdu: "کیا وہ گانا گا رہا ہے؟", english: "Is he singing a song?" },
            { urdu: "میں کمپیوٹر پر کام کر رہا ہوں", english: "I am working on the computer." },
            { urdu: "تم گھر کی صفائی کر رہے ہو", english: "You are cleaning the house." },
            { urdu: "ہم بازار سے چیزیں خرید رہے ہیں", english: "We are buying things from the market." },
            { urdu: "وہ کار چلا رہا ہے", english: "He is driving a car." },
            { urdu: "کیا بچے اسکول میں پڑھ رہے ہیں؟", english: "Are the children studying at school?" },
            { urdu: "کیا میں تمہیں یاد کر رہا ہوں؟", english: "Am I missing you?" },
            { urdu: "وہ دوستوں سے بات کر رہی ہے", english: "She is talking to her friends." },
            { urdu: "کیا ہم کسی تقریب میں جا رہے ہیں؟", english: "Are we going to an event?" },
            { urdu: "میں کافی نہیں پی رہا ہوں", english: "I am not drinking coffee." },
            { urdu: "وہ فون پر بات نہیں کر رہا ہے", english: "He is not talking on the phone." },
            { urdu: "کیا تم موبائل استعمال کر رہے ہو؟", english: "Are you using the mobile?" },
            { urdu: "کیا وہ کھڑکی سے باہر دیکھ رہی ہے؟", english: "Is she looking out the window?" },
            { urdu: "ہم تمہارا انتظار کر رہے ہیں", english: "We are waiting for you." },
            { urdu: "کیا بچے پارک میں کھیل رہے ہیں؟", english: "Are the children playing in the park?" },
            { urdu: "کیا میں تمہیں فون کر رہا ہوں؟", english: "Am I calling you?" },
            { urdu: "وہ نئی کتاب پڑھ رہی ہے", english: "She is reading a new book." },
            { urdu: "میں تصویر کھینچ رہا ہوں", english: "I am taking a picture." },
            { urdu: "ہم دوستوں کے ساتھ ہنس رہے ہیں", english: "We are laughing with friends." },
            { urdu: "کیا تم پانی نہیں پی رہے ہو؟", english: "Are you not drinking water?" },
            { urdu: "کیا وہ دیر سے آ رہی ہے؟", english: "Is she coming late?" },
            { urdu: "بچے ہوٹل میں کھا رہے ہیں", english: "The children are eating at the hotel." },
            { urdu: "کیا میں نیا سبق سیکھ رہا ہوں؟", english: "Am I learning a new lesson?" },
            { urdu: "وہ جلدی اٹھ رہی ہے", english: "She is waking up early." },
            { urdu: "تم گانے سن رہے ہو", english: "You are listening to songs." },
            { urdu: "ہم امتحان کی تیاری کر رہے ہیں", english: "We are preparing for the exam." },
            { urdu: "میں بازار میں خریداری نہیں کر رہا ہوں", english: "I am not shopping in the market." },
            { urdu: "وہ موبائل نہیں استعمال کر رہی ہے", english: "She is not using the mobile." },
            { urdu: "کیا ہم تمہارے ساتھ آ رہے ہیں؟", english: "Are we coming with you?" },
            { urdu: "کیا وہ دفتر میں کام کر رہا ہے؟", english: "Is he working in the office?" },
            { urdu: "میں اپنے کمرے کی صفائی کر رہا ہوں", english: "I am cleaning my room." },
            { urdu: "وہ باغ میں کھیل رہے ہیں", english: "They are playing in the garden." },
            { urdu: "کیا تم مجھ سے ناراض ہو؟", english: "Are you upset with me?" },
            { urdu: "کیا وہ موبائل چارج کر رہی ہے؟", english: "Is she charging the mobile?" },
            { urdu: "ہم اسکول نہیں جا رہے ہیں", english: "We are not going to school." },
            { urdu: "میں تمہارا انتظار نہیں کر رہا ہوں", english: "I am not waiting for you." },
            { urdu: "کیا تم لوگ گانے گا رہے ہو؟", english: "Are you guys singing songs?" },
            { urdu: "کیا وہ ہنس نہیں رہی؟", english: "Is she not laughing?" },
            { urdu: "ہم ہوٹل میں کھا رہے ہیں", english: "We are eating at the hotel." },
            { urdu: "وہ اپنے کپڑے دھو رہی ہے", english: "She is washing her clothes." },
            { urdu: "کیا تم بازار نہیں جا رہے ہو؟", english: "Are you not going to the market?" },
            { urdu: "کیا بچے سو رہے ہیں؟", english: "Are the children sleeping?" },
            { urdu: "میں نئی فلم دیکھ رہا ہوں", english: "I am watching a new movie." },
            { urdu: "وہ اسکول بس لے رہے ہیں", english: "They are taking the school bus." },
            { urdu: "کیا تم فون چارج کر رہے ہو؟", english: "Are you charging the phone?" },
            { urdu: "ہم کلاس میں سوالات پوچھ رہے ہیں", english: "We are asking questions in class." },
            { urdu: "کیا وہ اپنے دوست سے مل رہی ہے؟", english: "Is she meeting her friend?" },
            { urdu: "میں سبزی خرید رہا ہوں", english: "I am buying vegetables." },
            { urdu: "کیا تم نئی زبان سیکھ رہے ہو؟", english: "Are you learning a new language?" },
            { urdu: "کیا ہم اسکول جا رہے ہیں؟", english: "Are we going to school?" },
            { urdu: "میں کافی پی رہا ہوں", english: "I am drinking coffee." },
            { urdu: "وہ موبائل پر میسج کر رہی ہے", english: "She is texting on the mobile." }
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
