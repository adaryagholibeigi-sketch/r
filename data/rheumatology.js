const rheumatologyData = {
    id: "rheumatology",
    title: "روماتولوژی",
    description: "بیماری‌های مفاصل، بافت همبند و خودایمنی",
    
    summary: `
        <style>
            .mind-map h3 { color: #164C63; margin: 1.5rem 0 0.5rem 0; border-bottom: 2px solid #164C63; display: inline-block; padding-bottom: 3px; }
            .mind-map ul { list-style-type: none; padding-right: 1rem; margin-top: 0.5rem; border-right: 2px solid #ddd; }
            .mind-map li { margin-bottom: 0.6rem; position: relative; padding-right: 1.2rem; font-size: 0.95rem; }
            .mind-map li::before { content: "•"; color: #164C63; font-weight: bold; position: absolute; right: 0; font-size: 1.2rem; }
            .exam-night-notes { background-color: #fff3cd; padding: 1.5rem; border-radius: 12px; margin-top: 2rem; border-right: 5px solid #ffc107; }
            .exam-night-notes h3 { color: #856404; margin-bottom: 0.75rem; }
            .highlight { background-color: #fff3cd; font-weight: bold; color: #856404; padding: 0 4px; border-radius: 4px; }
        </style>

        <div class="mind-map">
            <h3>۱. رویکرد به بیمار روماتولوژیک</h3>
            <ul>
                <li><strong>درد مکانیکی (OA):</strong> با فعالیت بدتر، با استراحت بهتر، خشکی صبحگاهی < ۳۰ دقیقه.</li>
                <li><strong>درد التهابی (RA):</strong> خشکی صبحگاهی > ۴۵-۳۰ دقیقه، با فعالیت بهتر می‌شود.</li>
                <li><strong>مایع مفصلی:</strong> غیرالتهابی (<2000)، التهابی (2000-50000)، سپتیک (>50000 با PMN>90%).</li>
            </ul>

            <h3>۲. استئوآرتریت (OA)</h3>
            <ul>
                <li><strong>پاتوژنز:</strong> شروع از <span class="highlight">غضروف</span> (تخریب توسط IL-1, TNF-α, NO).</li>
                <li><strong>درگیری:</strong> DIP (ندول هبردن)، PIP (ندول بوشارد)، زانو، هیپ، CMC1.</li>
                <li><strong>علائم:</strong> <span class="highlight">خشکی صبحگاهی کوتاه</span>، درد مکانیکی.</li>
            </ul>

            <h3>۳. آرتریت روماتوئید (RA)</h3>
            <ul>
                <li><strong>پاتوژنز:</strong> سینوویت، تشکیل <span class="highlight">پانوس از سینوویوم</span>، تخریب غضروف.</li>
                <li><strong>الگوی درگیری:</strong> <span class="highlight">قرینه</span>، مفاصل کوچک دست (MCP, PIP) و پا (MTP).</li>
                <li><strong>آزمایشگاه:</strong> RF (حساس)، <span class="highlight">Anti-CCP</span> (اختصاصی).</li>
            </ul>

            <h3>۴. اسپوندیلوآرتروپاتی‌ها (SpA)</h3>
            <ul>
                <li><strong>ویژگی‌ها:</strong> کمردرد التهابی، ساکروایلیت، <span class="highlight">انتزیت</span>، HLA-B27 (+).</li>
                <li><strong>AS:</strong> مرد جوان، Bamboo spine، یووئیت قدامی.</li>
                <li><strong>ReA:</strong> تریاد (آرتریت + اورتریت + کنژنکتیویت).</li>
            </ul>

            <h3>۵. لوپوس و سندرم آنتی‌فسفولیپید</h3>
            <ul>
                <li><strong>لوپوس:</strong> Malar rash، حساسیت به نور، آرتریت غیراروزیو.</li>
                <li><strong>آنتی‌بادی‌ها:</strong> <span class="highlight">Anti-dsDNA</span> (کلیه)، Anti-Sm (اختصاصی)، Anti-Histon (دارویی).</li>
                <li><strong>APS:</strong> سقط مکرر، ترومبوز، Lupus anticoagulant.</li>
            </ul>

            <h3>۶. واسکولیت‌ها و کلاژن‌واسکولارها</h3>
            <ul>
                <li><strong>GCA:</strong> سالمند، سردرد، ESR بالا، بیوپسی استاندارد.</li>
                <li><strong>GPA:</strong> سینوزیت، درگیری ریه و کلیه، C-ANCA.</li>
                <li><strong>اسکلرودرمی:</strong> رینود، Sclerodactyly، درگیری مری.</li>
            </ul>

            <h3>۷. کریستالوپاتی‌ها</h3>
            <ul>
                <li><strong>نقرس:</strong> MTP1 (پوداگرا)، کریستال <span class="highlight">سوزنی</span>.</li>
                <li><strong>CPPD:</strong> زانو/مچ، کریستال <span class="highlight">لوزی</span>، کندروکلسینوز.</li>
            </ul>
        </div>

        <div class="exam-night-notes">
            <h3>نکات طلایی و تله‌های امتحانی</h3>
            <ul>
                <li><span class="highlight">ضخامت سینوویوم</span> در معاینه = به نفع RA.</li>
                <li><span class="highlight">استئوفیت</span> در رادیوگرافی = مشخصه OA.</li>
                <li>پانوس از <strong>سینوویوم</strong> منشاء می‌گیرد.</li>
                <li>ESR در پلی‌سیتمی <strong>کاذب پایین</strong> است.</li>
                <li>آلوپورینول در درمان <strong>حمله حاد</strong> نقرس کاربرد ندارد.</li>
                <li>مایع مفصلی با WBC>50000 و PMN>90% = <strong>سپتیک (اورژانس)</strong>.</li>
                <li>Anti-dsDNA با <strong>درگیری کلیوی</strong> لوپوس مرتبط است.</li>
            </ul>
        </div>
    `,
    
    questions: [
        // ================= 60 سوال نمونه (از فایل PDF) =================
        { id: "q1", text: "ضخامت سینوویم در معاینه ی مفصلی بیشتر به نفع کدام بیماری است؟", options: ["تب روماتیسمی حاد", "لوپوس", "آرتریت روماتویید", "آرتریت واکنشی"], correctAnswer: 2, explanation: "التهاب مکرر سینوویم در RA باعث هایپرتروفی آن می‌شود.", source: "sample" },
        { id: "q2", text: "تمامی یافته های آزمایشگاهی زیر در افراد مسن می تواند بدون بیماری زمینه ای وجود داشته باشد به جز:", options: ["بالا ESR", "CRP مثبت", "فاکتور روماتویید مثبت", "ANA مثبت"], correctAnswer: 1, explanation: "CRP مثبت همیشه نشانه التهاب فعال است.", source: "sample" },
        { id: "q3", text: "بیماری به علت آرتریت مهاجر مفاصل مراجعه کرده است کدام تشخیص افتراقی کم تر مطرح است؟", options: ["آرتریت روماتویید", "تب روماتیسمی", "آرتریت گنوکوکی", "آرتریت وایرال"], correctAnswer: 0, explanation: "RA الگوی افزایشی دارد.", source: "sample" },
        { id: "q4", text: "در شرح حال بیمار با مشکل مفصلی کدام مورد به نفع درگیری مکانیکال مفصل است؟", options: ["وجود درد صبحگاهی", "بهتر شدن درد با فعالیت", "خشکی صبحگاهی کم تر از نیم ساعت", "خستگی و کاهش وزن"], correctAnswer: 2, explanation: "خشکی کوتاه = مکانیکی.", source: "sample" },
        { id: "q5", text: "آقای 62 ساله با درد زانو راست، تورم و WBC:6000 (PMN:50%) در مایع مفصلی. کدام تشخیص افتراقی کم تر مطرح است؟", options: ["آرتریت قارچی", "آرتریت توبرکلوزی", "آرتریت سپتیک", "آرتریت روماتویید"], correctAnswer: 2, explanation: "سپتیک معمولاً WBC بالای 50000 دارد.", source: "sample" },
        { id: "q6", text: "در بیماری با پلی آرتریت، کدام یافته دلیل قاطع تری بر آرتریت روماتوئید است؟", options: ["ندول زیر جلدی", "تغییر شکل مفصلی", "ارزون استخوانی در مفصل", "فاکتور روماتویید مثبت"], correctAnswer: 2, explanation: "اروژن استخوانی یافته رادیولوژیک قطعی است.", source: "sample" },
        { id: "q7", text: "کدام یک از موارد زیر موجب افزایش ESR نمی شود؟", options: ["عفونتهای باکتریال", "بدخیمی ها", "واسکولیت ها", "پلی سیتمی"], correctAnswer: 3, explanation: "در پلی سیتمی ESR کاهش می‌یابد.", source: "sample" },
        { id: "q8", text: "تمامی موارد زیر خطر بروز استئوآرتریت زانو را افزایش می دهند به جز؟", options: ["چاقی", "کاهش تراکم استخوان", "دفورمیتی ژنواروم", "اختلال حس عمقی"], correctAnswer: 1, explanation: "استئوپروز عامل خطر OA نیست.", source: "sample" },
        { id: "q9", text: "تغییرات پاتولوژیک در استئوآرتریت مفصل از کدام بافت شروع می شود؟", options: ["سینوویوم", "استخوان", "غضروف", "عضله"], correctAnswer: 2, explanation: "OA از غضروف شروع می‌شود.", source: "sample" },
        { id: "q10", text: "نقش فاکتور ژنتیک و ارثی بودن استئوآرتریت در کدام یک از مفاصل بیشتر است؟", options: ["زانو", "دست", "ژنرالیزه", "مهره های گردنی"], correctAnswer: 1, explanation: "در OA دست نقش ژنتیک بارزتر است.", source: "sample" },
        { id: "q11", text: "آقای 68 ساله دچار استئوآرتریت هیپ است، نخستین حرکتی که محدود و دردناک می‌شود؟", options: ["اکسترنال روتیشن", "فلکشن", "اینترنال روتیشن", "اکستنشن"], correctAnswer: 2, explanation: "اینترنال روتیشن اولین حرکت محدود شده است.", source: "sample" },
        { id: "q12", text: "در استئوآرتریت اولیه ابتلا کدام مفصل شیوع کمتری دارد؟", options: ["مهره های گردنی", "کارپومتاکارپال اول", "مفصل زانو", "مفصل شانه"], correctAnswer: 3, explanation: "شانه در OA اولیه کم‌شایع است.", source: "sample" },
        { id: "q13", text: "برای تشخیص آرتریت روماتوئید کدام تست اختصاصی تر است؟", options: ["Rheumatoid factor", "HLADR3", "HLADR4", "Anti-ccp"], correctAnswer: 3, explanation: "Anti-CCP اختصاصیت بالاتری دارد.", source: "sample" },
        { id: "q14", text: "در بیماری آرتریت روماتوئید پانوس از کدام بافت منشاء می‌گیرد؟", options: ["غضروف", "استخوان", "سینوویوم", "کپسول مفصلی"], correctAnswer: 2, explanation: "پانوس از سینوویوم منشاء می‌گیرد.", source: "sample" },
        { id: "q15", text: "در آرتریت روماتوئید ابتلا کدام یک از مفاصل دست شیوع کمتری دارد؟", options: ["اینترفالنژیال پروگزیمال", "متاکارپوفالنژیال", "اینترفالنژیال دیستال", "مچ دست"], correctAnswer: 2, explanation: "DIP معمولاً Spare است.", source: "sample" },
        { id: "q16", text: "آقای 29 ساله با تورم زانو و مچ پا، ترشح ادراری، اسهال 3 هفته قبل و قرمزی چشم. HLA-B27 منفی. تشخیص محتمل؟", options: ["نقرس", "آرتریت راکتیو", "آرتریت روماتویید", "آرتریت پسوریاتیک"], correctAnswer: 1, explanation: "تریاد آرتریت، اورتریت و کنژنکتیویت = آرتریت راکتیو.", source: "sample" },
        { id: "q17", text: "تست اختصاصی برای تشخیص بیماری لوپوس، کدام است؟", options: ["ANA", "Anti Ro-Ab", "Anti ds DNA", "Anti Histon Ab"], correctAnswer: 2, explanation: "Anti-dsDNA اختصاصی است.", source: "sample" },
        { id: "q18", text: "در بیمار مبتلا به لوپوس مثبت شدن کدام آنتی بادی بیشتر با فعالیت بیماری و درگیری کلیوی ارتباط دارد؟", options: ["Anti Ro", "Ant La", "Anti Histon", "Anti ds DNA"], correctAnswer: 3, explanation: "Anti-dsDNA با نفریت لوپوسی مرتبط است.", source: "sample" },
        { id: "q19", text: "خانم 30 ساله با تب، زخم بدون درد دهان، آرتریت متناوب و قرمزی صورت با درگیری چین نازولیبال. کدام یافته به ضرر لوپوس است؟", options: ["تب", "ایتال چین نازولیبال", "آرتریت متنابوا", "زخم دهانی بدون درد"], correctAnswer: 1, explanation: "درگیری چین نازولیبال به نفع درماتومیوزیت است.", source: "sample" },
        { id: "q20", text: "خانم 25 ساله لوپوس با Hb:8، MCV:94، LDH:1500، Retic:6%. کدام نوع آنمی مطرح است؟", options: ["آنمی فقر آهن", "آنمی همولیتیک", "آنمی مگالوبالستیک", "آنمی بیماری مزمن"], correctAnswer: 1, explanation: "LDH بالا و رتیک بالا = همولیز.", source: "sample" },
        { id: "q21", text: "در بیمار لوپوس 30 ساله با سابقه سقط 14 هفته و ترومبوز وریدی، کدام آنتی بادی بررسی شود؟", options: ["ANA", "Anti ds DNA", "Lupus anticoagulant", "AntiRo"], correctAnswer: 2, explanation: "سقط و ترومبوز = APS.", source: "sample" },
        { id: "q22", text: "آقای 45 ساله چاق با درد مچ پا، سابقه قرمزی متاتارس اول بعد از الکل. تشخیص محتمل؟", options: ["نقرس", "آرتریت واکنشی", "استئوآرتریت", "نقرس کاذب"], correctAnswer: 0, explanation: "پوداگرا تیپیک نقرس است.", source: "sample" },
        { id: "q23", text: "خانم 74 ساله با کمردرد، بدون تب و تندرنس. گرافی: کاهش فضای مفصلی L3-L5 با اسکلروز و استئوفیت. تشخیص؟", options: ["بیماری دژنراتیو مهره های کمری", "اسپاندیلوآرتروپاتی", "شکستگی فشاری", "سل ستون مهره ها"], correctAnswer: 0, explanation: "دژنراتیو (آرتروز).", source: "sample" },
        { id: "q24", text: "انجام کدام آزمایش از مایع مفصلی در تصمیم گیری کمک کننده نیست؟", options: ["کشت و رنگ آمیزی گرم", "پروتئین و LDH", "جستجوی کریستال", "شمارش سلولی"], correctAnswer: 1, explanation: "پروتئین و LDH ارزش تشخیصی ندارند.", source: "sample" },
        { id: "q25", text: "در رادیوگرافی دست بیمار مبتلا به آرتریت روماتوئید طول کشیده، کدام یافته مورد انتظار است؟", options: ["ارزویون در حاشیه مفصل", "افزایش فاصله مفصلی", "استئوفیت", "افزایش دانسیته در اطراف مفصل"], correctAnswer: 0, explanation: "اروژن از یافته‌های RA است.", source: "sample" },
        { id: "q26", text: "آقای 30 ساله با کمردرد 1 ساله که صبح‌ها شدیدتر است، تندرنس ساکروایلیاک و ساکروایلیت دوطرفه در گرافی. تشخیص؟", options: ["اسپوندیلوارتروپاتی", "دیسکوپاتی", "آرتریت روماتوئید", "استئوآرتریت"], correctAnswer: 0, explanation: "کمردرد التهابی + ساکروایلیت = SpA.", source: "sample" },
        { id: "q27", text: "خانم 25 ساله با ضایعات اریتماتو روی بند انگشتان، ضعف عضلانی (ناتوانی در بلند شدن) و CPK:1500. تشخیص؟", options: ["پلی میوزیت", "میوزیت نکروزان", "درماتو میوزیت", "انکلوزیون بادی"], correctAnswer: 2, explanation: "ضایعات پوستی + ضعف + CPK بالا = درماتومیوزیت.", source: "sample" },
        { id: "q28", text: "آقای 70 ساله با درد شانه و لگن، خستگی و ESR:80، CPK نرمال. تشخیص؟", options: ["پلی میوزیت", "میوپاتی نکروزان", "پلی میالژی روماتیکا", "درماتومیوزیت"], correctAnswer: 2, explanation: "PMR: درد کمربندی، ESR بالا، CPK نرمال.", source: "sample" },
        { id: "q29", text: "پسر 15 ساله با تب، آرتریت مهاجر، سابقه گلودرد 3 هفته قبل و ASO:600. تشخیص؟", options: ["تب روماتیسمی حاد", "آرتریت روماتوئید", "آرتریت واکنشی", "آرتریت سپتیک"], correctAnswer: 0, explanation: "تب روماتیسمی.", source: "sample" },
        { id: "q30", text: "آقای 50 ساله با زانوی قرمز و گرم، سابقه نقرس. WBC مایع:60000 (Neut:90%). کدام تشخیص توجیه مناسبی برای آرتریت زانو نیست؟", options: ["استئوارتریت", "آرتریت سپتیک", "نقرس", "آرتریت واکنشی"], correctAnswer: 0, explanation: "استئوآرتریت مایع غیرالتهابی دارد.", source: "sample" },
        { id: "q31", text: "در کدام یک از بیماری های زیر ندول زیر جلدی وجود ندارد؟", options: ["تب روماتیسمی حاد", "آرتریت روماتوئید", "نقرس", "اسپوندیلو آرتروپاتی ها"], correctAnswer: 3, explanation: "ندول در SpA وجود ندارد.", source: "sample" },
        { id: "q32", text: "آقای 70 ساله با کاهش دید، سردرد، تندرنس اسکالپ و ESR:90. تشخیص؟", options: ["آرتریت تاکایاسو", "آرتریت تمپورال", "پلی آرتریت ندوز", "واسکولیت وگنر"], correctAnswer: 1, explanation: "آرتریت تمپورال (GCA).", source: "sample" },
        { id: "q33", text: "کدام یک از بیماریهای زیر با HLA کلاس I ارتباط دارد؟", options: ["لوپوس", "آرتریت روماتویید", "اسپوندیلیت آنکیلوزان", "شوگرن"], correctAnswer: 2, explanation: "AS با HLA-B27 مرتبط است.", source: "sample" },
        { id: "q34", text: "خانم 28 ساله با درگیری PIP و MCP، ضایعات پوسته‌ریزی روی آرنج و زانو، Pitting ناخن و RF منفی. تشخیص؟", options: ["آرتریت نقرسی", "آرتریت پسوریاتیک", "آرتریت روماتویید", "لوپوس"], correctAnswer: 1, explanation: "آرتریت پسوریاتیک.", source: "sample" },
        { id: "q35", text: "آقای 30 ساله با کمردرد شبانه و خشکی صبحگاهی 2 ساعته، تندرنس آشیل و زانو. کدام رادیوگرافی کمک می‌کند؟", options: ["لوموساکرال", "زانو", "مچ پا", "لگن"], correctAnswer: 3, explanation: "گرافی لگن برای بررسی ساکروایلیت.", source: "sample" },
        { id: "q36", text: "انتزیت از مشخصات کدام یک از انواع بیماریهای مفصلی است؟", options: ["آرتریت روماتویید", "لوپوس", "واسکولیت ها", "اسپوندیلوآرتروپاتی"], correctAnswer: 3, explanation: "انتزیت مشخصه SpA است.", source: "sample" },
        { id: "q37", text: "تمام موارد زیر سبب بروز استئوپروزیس می‌شود بجز؟", options: ["هیپوگنادیسم", "هیپرپرولاکتینمی", "هیپرکورتیزولیسم", "هیپوتیروئیدی"], correctAnswer: 3, explanation: "هیپوتیروئیدی عامل خطر نیست.", source: "sample" },
        { id: "q38", text: "آقای 32 ساله با درد رادیکولر، ناتوانی در راه رفتن روی پاشنه. رفلکس آشیل نرمال. ریشه درگیر؟", options: ["S1", "L5", "L4", "L3"], correctAnswer: 1, explanation: "راه رفتن روی پاشنه = L5.", source: "sample" },
        { id: "q39", text: "مرد 60 ساله با درد کمر که با ایستادن بدتر و با نشستن بهتر می‌شود. تشخیص؟", options: ["تنگی آئورت شکمی", "متاستاز استخوانی", "اسپوندیلیت آنکیلوران", "تنگی کانال نخاع"], correctAnswer: 3, explanation: "تنگی کانال نخاع.", source: "sample" },
        { id: "q40", text: "آقای 38 ساله با کمردرد 6 ماهه، خشکی صبحگاهی 2 ساعته، بدتر با فعالیت. کدام به نفع کمردرد التهابی نیست؟", options: ["مدت شروع علائم", "وجود درد شبانه", "بدتر شدن درد با فعالیت", "سن بیمار"], correctAnswer: 2, explanation: "در التهابی با فعالیت بهتر می‌شود.", source: "sample" },
        { id: "q41", text: "خانم 24 ساله با آرتریت زانو، آفت دهانی مکرر، زخم ژنیتال و ضایعات پوسچولر. تشخیص؟", options: ["آرتریت پسوریاتیک", "لوپوس", "آرتریت واکنشی", "بیماری بهجت"], correctAnswer: 3, explanation: "بیماری بهجت.", source: "sample" },
        { id: "q42", text: "خانم 45 ساله با خشکی دهان و بزرگ شدن پاروتید دوطرفه. کدام بررسی ضروری نیست؟", options: ["FBS", "HIV", "ANA", "CPK"], correctAnswer: 3, explanation: "CPK برای میوزیت است.", source: "sample" },
        { id: "q43", text: "کدام یک از موارد زیر در فرم محدود اسکلرودرمی شایع تر از فرم منتشر است؟", options: ["فیبروز ریه", "افزایش فشار خون شریان ریوی", "گریز فشار خون کلیوی", "درگیری پوست تنه"], correctAnswer: 1, explanation: "PAH در فرم محدود.", source: "sample" },
        { id: "q44", text: "کدام یک از موارد زیر بیشتر به نفع رینود اولیه می باشد؟", options: ["زخم انگشتان", "درگیری قرینه انگشتان", "ANA مثبت", "سن شروع بالای 30 سال"], correctAnswer: 1, explanation: "رینود اولیه متقارن است.", source: "sample" },
        { id: "q45", text: "وجود کدام یک از موارد زیر در اسکلرودرمی با پیش آگهی بهتری همراه است؟", options: ["فریکشن راب تاندونی", "درگیری منتشر پوستی", "سن پایین شروع بیماری", "حضور آنتی Topoisomerase"], correctAnswer: 2, explanation: "سن پایین شروع بهتر است.", source: "sample" },
        { id: "q46", text: "مرد جوان با تنگی نفس، نارسایی کلیه، گانگرن انگشتان، P-ANCA مثبت و ائوزینوفیلی. تشخیص؟", options: ["پلی آرتریت ندوزا", "پلی آنژنیت میکروسکوپیک", "سندرم وگرن", "سندرم چرچ اشراوس"], correctAnswer: 3, explanation: "EGPA.", source: "sample" },
        { id: "q47", text: "نوجوان 12 ساله با پورپورا در ساق و باسن، درد شکم، آرتریت زانو. تشخیص؟", options: ["بیماری هنوخ شوئن الین", "گرانولوماتوز وگرن", "سندروم چرچ اشراوس", "پلی آرتریت ندوزا"], correctAnswer: 0, explanation: "HSP.", source: "sample" },
        { id: "q48", text: "در درمان حمله آرتریت حاد نقرسی همه داروهای زیر کاربرد دارد به جز؟", options: ["ایندومتاسین", "پردنيزولون", "الوپورینول", "کلشی سین"], correctAnswer: 2, explanation: "آلوپورینول در حمله حاد ممنوع است.", source: "sample" },
        { id: "q49", text: "خانم 75 ساله با آرتریت زانو، ESR:53، CRP بالا. مایع حاوی کریستال لوزی. کدام کریستال؟", options: ["Calcium oxalate", "Hydroxy apatite", "Monosodium urate", "Calcium pyrophosphate"], correctAnswer: 3, explanation: "CPPD (نقرس کاذب).", source: "sample" },
        { id: "q50", text: "خانم 40 ساله با گزگز 3 انگشت اول دست، بدتر شدن شبانه و آتروفی تنار. تشخیص؟", options: ["آرتروز انگشتان", "تنوسینوویت دکوروان", "سندروم تونل کارپ", "انگشت ماشه ای"], correctAnswer: 2, explanation: "سندرم تونل کارپ.", source: "sample" },
        { id: "q51", text: "مرد 56 ساله با تورم کیسه‌ای گرم و دردناک روی زائده اولکرانون، حرکت مفصل طبیعی. تشخیص؟", options: ["آرتریت", "اپی کندیلیت داخلی", "بورسیت اوله کرانون", "اپی کندیلیت خارجی"], correctAnswer: 2, explanation: "بورسیت اولکرانون.", source: "sample" },
        { id: "q52", text: "سوپینیشن ساعد بر علیه مقاومت، سبب درد قدام بازو می‌شود. تفسیر؟", options: ["پارگی سر دراز عضله دو سر", "تاندینیت بای سپس", "تاندینیت روتاتورکاف", "بورسیت ساب دلتوئید"], correctAnswer: 1, explanation: "تاندینیت بایسپس.", source: "sample" },
        { id: "q53", text: "طبق کریتریای ASAS همه موارد زیر همراه با ساکروایلئیت برای تشخیص AS کافی است بجز؟", options: ["افزایش ESR", "یووئیت قدامی", "پاسخ مطلوب به NSAIDs", "داکتیلیت"], correctAnswer: 0, explanation: "ESR جزو معیارها نیست.", source: "sample" },
        { id: "q54", text: "در معاینه بالینی فرد مشکوک به AS همه تستهای زیر کمک کننده هستند بجز:", options: ["Schober", "Faber", "Chest expansion test", "SLR"], correctAnswer: 3, explanation: "SLR برای رادیکولوپاتی است.", source: "sample" },
        { id: "q55", text: "انگشت سوسیسی در کدامیک از بیماریهای زیر دیده میشود؟", options: ["تب روماتیسمی حاد", "آرتریت پسوریاتیک", "آرتریت روماتویید", "لوپوس"], correctAnswer: 1, explanation: "PsA و ReA.", source: "sample" },
        { id: "q56", text: "در بیماری با درد مفصل کدام یافته به نفع تشخیص منشاء مفصلی برای درد است؟", options: ["وجود افیوژن مفصل", "درد نقطه ای روی مفصل", "درد کمتر در حرکات پاسیو", "محدودیت کمتر در حرکات پاسیو"], correctAnswer: 0, explanation: "افیوژن نشانه درگیری داخل مفصل است.", source: "sample" },
        { id: "q57", text: "خانم 56 ساله با درد پاشنه پا، بدتر در قدم‌های اول صبح، تندرنس تحتانی پاشنه. تشخیص؟", options: ["انتزیت اشیل", "فاشیت پلانتار", "یورسیت رتروکالکانال", "آرتریت مچ پا"], correctAnswer: 1, explanation: "فاشیت پلانتار.", source: "sample" },
        { id: "q58", text: "شایعترین درگیری قلبی بیماری لوپوس کدام است؟", options: ["پریکاردیت", "میوکاردیت", "نارسایی قلبی", "اندوکاردیت"], correctAnswer: 0, explanation: "پریکاردیت شایع‌ترین است.", source: "sample" },
        { id: "q59", text: "همه عوامل محیطی زیر در شروع یا شعله وری لوپوس تاثیر دارند به جز؟", options: ["تماس شغلی با سیلیس", "دریافت استروژن", "اشعه فرابنفش خورشید", "ویروس هرپس"], correctAnswer: 3, explanation: "ویروس EBV مرتبط است.", source: "sample" },
        { id: "q60", text: "خانم 45 ساله با درد حاد زانو و تب، زانوی گرم و افیوژن. اقدام تشخیصی ارجح؟", options: ["گرافی زانو", "سونوگرافی زانو", "آرتروسنتز", "CT scan"], correctAnswer: 2, explanation: "آسپیراسیون مایع (آرتروسنتز).", source: "sample" },

        // ================= 60 سوال تالیفی =================
        { id: "t1", text: "کدام آنتی‌بادی در سندرم شوگرن اختصاصی‌تر است؟", options: ["Anti-Ro (SSA)", "Anti-La (SSB)", "RF", "ANA"], correctAnswer: 1, explanation: "Anti-La اختصاصی‌تر است.", source: "custom" },
        { id: "t2", text: "در بیماری اسکلرودرمی، Anti-Centromere با کدام فرم همراه است؟", options: ["Diffuse", "Limited (CREST)", "Sine scleroderma", "Overlap"], correctAnswer: 1, explanation: "Anti-Centromere در فرم محدود (CREST).", source: "custom" },
        { id: "t3", text: "کدام دارو در درمان حمله حاد نقرس در بیمار با نارسایی کلیه مناسب‌تر است؟", options: ["ایندومتاسین", "کلشی سین", "آلوپورینول", "پروبنسید"], correctAnswer: 1, explanation: "کلشی سین در این بیماران ارجحیت دارد.", source: "custom" },
        { id: "t4", text: "یافته رادیولوژیک Pencil-in-cup مشخصه کدام بیماری است؟", options: ["آرتریت روماتوئید", "آرتریت پسوریاتیک", "استئوآرتریت", "نقرس"], correctAnswer: 1, explanation: "Pencil-in-cup در PsA.", source: "custom" },
        { id: "t5", text: "کدام تست برای تشخیص سندرم تونل کارپ اختصاصی‌تر است؟", options: ["Tinel", "Phalen", "Finkelstein", "Speed"], correctAnswer: 1, explanation: "Phalen اختصاصی‌تر است.", source: "custom" },
        { id: "t6", text: "شایع‌ترین محل درگیری در نقرس اولیه کدام است؟", options: ["مفصل زانو", "MTP اول (پوداگرا)", "مچ دست", "مفصل شانه"], correctAnswer: 1, explanation: "MTP1 شایع‌ترین است.", source: "custom" },
        { id: "t7", text: "کدام یک از داروهای زیر مهارکننده TNF-alpha نیست؟", options: ["Adalimumab", "Etanercept", "Rituximab", "Infliximab"], correctAnswer: 2, explanation: "Rituximab آنتی‌بادی علیه CD20 است.", source: "custom" },
        { id: "t8", text: "در بیمار با کمردرد التهابی، کدام یافته در MRI زودتر دیده می‌شود؟", options: ["ساکروایلیت", "استئوفیت", "فیوژن مهره‌ها", "ادم مغز استخوان"], correctAnswer: 3, explanation: "MRI ادم مغز استخوان را نشان می‌دهد.", source: "custom" },
        { id: "t9", text: "کدام آنتی‌بادی در لوپوس دارویی شایع‌تر است؟", options: ["Anti-dsDNA", "Anti-Histon", "Anti-Sm", "Anti-Ro"], correctAnswer: 1, explanation: "Anti-Histon در لوپوس دارویی.", source: "custom" },
        { id: "t10", text: "شایع‌ترین تظاهر خارج مفصلی در بیماری بهجت کدام است؟", options: ["درگیری چشمی", "زخم دهانی", "زخم ژنیتال", "درگیری CNS"], correctAnswer: 1, explanation: "زخم دهانی شایع‌ترین.", source: "custom" },
        { id: "t11", text: "در پاتوژنز آرتریت روماتوئید، کدام آنزیم مسئول سیترولیناسیون است؟", options: ["MMP", "PAD", "RANKL", "COX-2"], correctAnswer: 1, explanation: "آنزیم PAD.", source: "custom" },
        { id: "t12", text: "کدام یافته در مایع مفصلی به نفع آرتریت سپتیک است؟", options: ["WBC < 2000", "PMN > 75%", "کریستال مثبت", "کشت منفی"], correctAnswer: 1, explanation: "PMN بالای 75%.", source: "custom" },
        { id: "t13", text: "کدام یک از بیماری‌های زیر با HLA-B51 ارتباط دارد؟", options: ["اسپوندیلیت آنکیلوزان", "بیماری بهجت", "آرتریت پسوریاتیک", "سندرم ریتر"], correctAnswer: 1, explanation: "HLA-B51 در بهجت.", source: "custom" },
        { id: "t14", text: "در بیمار با ضعف پروگزیمال و راش هلیوتروپ، کدام آنزیم بالا می‌رود؟", options: ["ALP", "ALT", "CPK", "Amylase"], correctAnswer: 2, explanation: "CPK نشانگر آسیب عضلانی.", source: "custom" },
        { id: "t15", text: "شایع‌ترین عارضه چشمی در سندرم شوگرن کدام است؟", options: ["یووئیت", "کراتوکونژونکتیویت سیکا", "آب مروارید", "گلوکوم"], correctAnswer: 1, explanation: "خشکی چشم.", source: "custom" },
        { id: "t16", text: "کدام تست برای تشخیص آرتریت تمپورال استاندارد طلایی است؟", options: ["ESR", "CRP", "بیوپسی شریان تمپورال", "سونوگرافی"], correctAnswer: 2, explanation: "بیوپسی.", source: "custom" },
        { id: "t17", text: "کدام یک از موارد زیر در درمان بحران کلیوی اسکلرودرمی ارجحیت دارد؟", options: ["استروئید", "مهارکننده ACE", "سیکلوفسفامید", "پلاسمافرز"], correctAnswer: 1, explanation: "مهارکننده ACE.", source: "custom" },
        { id: "t18", text: "در بیمار با آرتریت روماتوئید، کدام یافته رادیولوژیک زودتر دیده می‌شود؟", options: ["استئوفیت", "استئوپنی ژوکستا-آرتیکولار", "آنکیلوز", "فیوژن"], correctAnswer: 1, explanation: "استئوپنی.", source: "custom" },
        { id: "t19", text: "کدام نوع واسکولیت بیشتر با درگیری کلیه و ریه همراه است؟", options: ["GPA (وگنر)", "GCA", "Takayasu", "PAN"], correctAnswer: 0, explanation: "GPA.", source: "custom" },
        { id: "t20", text: "در بیمار با پلی‌میوزیت، کدام علامت بالینی شایع‌تر است؟", options: ["ضعف دیستال", "ضعف پروگزیمال", "درگیری عضلات چشم", "رفلکس افزایش‌یافته"], correctAnswer: 1, explanation: "ضعف پروگزیمال.", source: "custom" },
        { id: "t21", text: "کدام دارو در درمان نقرس با مکانیسم مهار URAT1 عمل می‌کند؟", options: ["آلوپورینول", "فبوکسوستات", "پروبنسید", "کلشی سین"], correctAnswer: 2, explanation: "پروبنسید.", source: "custom" },
        { id: "t22", text: "شایع‌ترین عارضه جدی در بیماران مبتلا به AS طولانی مدت کدام است؟", options: ["نارسایی کلیه", "بیماری قلبی-عروقی", "پوکی استخوان و شکستگی مهره", "لوسمی"], correctAnswer: 2, explanation: "پوکی استخوان.", source: "custom" },
        { id: "t23", text: "کدام یافته بالینی در سندرم شوگرن شایع‌تر است؟", options: ["بزرگی پاروتید", "زخم دهانی", "درگیری CNS", "پنومونیت"], correctAnswer: 0, explanation: "بزرگی پاروتید.", source: "custom" },
        { id: "t24", text: "در بیماری لوپوس، کدام آنتی‌بادی با خطر بلوک قلبی جنین مرتبط است؟", options: ["Anti-dsDNA", "Anti-Sm", "Anti-Ro", "Anti-Histon"], correctAnswer: 2, explanation: "Anti-Ro.", source: "custom" },
        { id: "t25", text: "کدام یک از بیماری‌های زیر با کاهش سطح کمپلمان همراه است؟", options: ["آرتریت روماتوئید", "لوپوس فعال", "اسپوندیلیت آنکیلوزان", "استئوآرتریت"], correctAnswer: 1, explanation: "لوپوس فعال.", source: "custom" },
        { id: "t26", text: "کدام تست در مراحل اولیه RA حساسیت بالاتری دارد؟", options: ["RF", "Anti-CCP", "CRP", "ESR"], correctAnswer: 1, explanation: "Anti-CCP.", source: "custom" },
        { id: "t27", text: "کدام دفورمیتی به صورت فلکشن PIP و هایپراکستنشن DIP است؟", options: ["Swan neck", "Boutonniere", "Ulnar deviation", "Z-thumb"], correctAnswer: 0, explanation: "Swan neck.", source: "custom" },
        { id: "t28", text: "کدام یک از موارد زیر در تشخیص تب روماتیسمی حاد جزء معیارهای اصلی است؟", options: ["تب", "آرترالژی", "افزایش ESR", "کارژیت"], correctAnswer: 3, explanation: "کارژیت.", source: "custom" },
        { id: "t29", text: "کدام بیماری با درد و تورم در مفصل MTP اول و هیپراورسمی مشخص می‌شود؟", options: ["نقرس", "نقرس کاذب", "آرتریت روماتوئید", "استئوآرتریت"], correctAnswer: 0, explanation: "نقرس.", source: "custom" },
        { id: "t30", text: "کدام یک از داروهای زیر در درمان پوکی استخوان استفاده می‌شود؟", options: ["آلوپورینول", "بیس‌فسفونات‌ها", "کلشی سین", "متوترکسات"], correctAnswer: 1, explanation: "بیس‌فسفونات‌ها.", source: "custom" },
        { id: "t31", text: "کدام نوع آنمی در بیماری‌های مزمن التهابی شایع است؟", options: ["آنمی فقر آهن", "آنمی بیماری مزمن", "آنمی مگالوبلاستیک", "آنمی همولیتیک"], correctAnswer: 1, explanation: "آنمی بیماری مزمن.", source: "custom" },
        { id: "t32", text: "در سندرم تونل کارپ، کدام انگشتان درگیر می‌شوند؟", options: ["انگشت اول و دوم", "انگشت دوم و سوم", "سه انگشت اول و نیمی از چهارم", "انگشت چهارم و پنجم"], correctAnswer: 2, explanation: "عصب مدین.", source: "custom" },
        { id: "t33", text: "کدام یک از بیماری‌های زیر با HLA-DR4 ارتباط دارد؟", options: ["اسپوندیلیت آنکیلوزان", "آرتریت روماتوئید", "بیماری بهجت", "سندرم ریتر"], correctAnswer: 1, explanation: "HLA-DR4 با RA.", source: "custom" },
        { id: "t34", text: "کدام دارو در درمان نقرس با مکانیسم مهار گزانتین اکسیداز عمل می‌کند؟", options: ["پروبنسید", "آلوپورینول", "کلشی سین", "ایندومتاسین"], correctAnswer: 1, explanation: "آلوپورینول.", source: "custom" },
        { id: "t35", text: "شایع‌ترین تظاهر چشمی در بیماری بهجت کدام است؟", options: ["یووئیت قدامی", "یووئیت خلفی", "کونژنکتیویت", "کراتیت"], correctAnswer: 1, explanation: "یووئیت خلفی.", source: "custom" },
        { id: "t36", text: "کدام یک از موارد زیر در تشخیص سندرم شوگرن کمک‌کننده است؟", options: ["Anti-CCP", "Anti-Ro/SSA", "Anti-dsDNA", "Anti-Histon"], correctAnswer: 1, explanation: "Anti-Ro/SSA.", source: "custom" },
        { id: "t37", text: "در بیمار با لوپوس، کدام یافته با فعالیت بیماری مرتبط است؟", options: ["RF", "ESR", "Anti-dsDNA", "C3"], correctAnswer: 2, explanation: "Anti-dsDNA.", source: "custom" },
        { id: "t38", text: "کدام بیماری با رسوب کریستال‌های پیروفسفات کلسیم مشخص می‌شود؟", options: ["نقرس", "نقرس کاذب", "استئوآرتریت", "آرتریت روماتوئید"], correctAnswer: 1, explanation: "نقرس کاذب.", source: "custom" },
        { id: "t39", text: "کدام بیماری با ضعف عضلانی پیشرونده و راش هلیوتروپ مشخص می‌شود؟", options: ["پلی میوزیت", "درماتومیوزیت", "میوزیت انکلوزیون بادی", "میوپاتی نکروزان"], correctAnswer: 1, explanation: "درماتومیوزیت.", source: "custom" },
        { id: "t40", text: "شایع‌ترین محل درگیری در استئوآرتریت دست کدام است؟", options: ["MCP", "PIP", "DIP", "مچ دست"], correctAnswer: 2, explanation: "DIP.", source: "custom" },
        { id: "t41", text: "کدام یک از موارد زیر در تشخیص آرتریت سپتیک کمک‌کننده است؟", options: ["WBC پایین", "PMN بالا", "کریستال مثبت", "کشت منفی"], correctAnswer: 1, explanation: "PMN بالا.", source: "custom" },
        { id: "t42", text: "کدام یک از بیماری‌های زیر با HLA-B27 ارتباط دارد؟", options: ["آرتریت روماتوئید", "اسپوندیلیت آنکیلوزان", "لوپوس", "بیماری بهجت"], correctAnswer: 1, explanation: "HLA-B27 با AS.", source: "custom" },
        { id: "t43", text: "کدام دارو در درمان لوپوس برای جلوگیری از عوارض کلیوی استفاده می‌شود؟", options: ["هیدروکسی کلروکین", "متوترکسات", "سیکلوفسفامید", "آزاتیوپرین"], correctAnswer: 0, explanation: "هیدروکسی کلروکین.", source: "custom" },
        { id: "t44", text: "کدام بیماری با پورپورای قابل لمس در اندام تحتانی مشخص می‌شود؟", options: ["لوپوس", "واسکولیت IgA (HSP)", "آرتریت روماتوئید", "نقرس"], correctAnswer: 1, explanation: "HSP.", source: "custom" },
        { id: "t45", text: "شایع‌ترین عارضه چشمی در بیماران مبتلا به آرتریت روماتوئید کدام است؟", options: ["کراتوکونژونکتیویت سیکا", "یووئیت", "آب مروارید", "گلوکوم"], correctAnswer: 0, explanation: "خشکی چشم.", source: "custom" },
        { id: "t46", text: "کدام دارو در درمان نقرس با مکانیسم افزایش دفع اسید اوریک عمل می‌کند؟", options: ["آلوپورینول", "فبوکسوستات", "پروبنسید", "کلشی سین"], correctAnswer: 2, explanation: "پروبنسید.", source: "custom" },
        { id: "t47", text: "کدام بیماری با درگیری مفاصل کوچک دست (MCP, PIP) و خشکی طولانی مشخص می‌شود؟", options: ["استئوآرتریت", "آرتریت روماتوئید", "نقرس", "اسپوندیلیت آنکیلوزان"], correctAnswer: 1, explanation: "RA.", source: "custom" },
        { id: "t48", text: "کدام بیماری با درگیری DIP و ندول هبردن مشخص می‌شود؟", options: ["استئوآرتریت", "آرتریت روماتوئید", "نقرس", "پسوریاتیک"], correctAnswer: 0, explanation: "OA.", source: "custom" },
        { id: "t49", text: "کدام بیماری با کمردرد التهابی، ساکروایلیت و HLA-B27 مثبت مشخص می‌شود؟", options: ["آرتریت روماتوئید", "اسپوندیلیت آنکیلوزان", "لوپوس", "استئوآرتریت"], correctAnswer: 1, explanation: "AS.", source: "custom" },
        { id: "t50", text: "شایع‌ترین تظاهر جلدی در بیماری لوپوس کدام است؟", options: ["Rash پروانه‌ای", "زخم دهانی", "پورپورا", "آلوپسی"], correctAnswer: 0, explanation: "Rash پروانه‌ای.", source: "custom" },
        { id: "t51", text: "کدام بیماری با درگیری مفاصل بزرگ و ESR بالا در سالمندان مشخص می‌شود؟", options: ["پلی میوزیت", "پلی میالژی روماتیکا", "آرتریت روماتوئید", "استئوآرتریت"], correctAnswer: 1, explanation: "PMR.", source: "custom" },
        { id: "t52", text: "کدام بیماری با ضعف پروگزیمال و افزایش CPK مشخص می‌شود؟", options: ["پلی میوزیت", "پلی میالژی روماتیکا", "میاستنی گراویس", "نوروپاتی"], correctAnswer: 0, explanation: "پلی میوزیت.", source: "custom" },
        { id: "t53", text: "کدام بیماری با تنگی نفس، سرفه خشک و فیبروز ریه در اسکلرودرمی مشخص می‌شود؟", options: ["PAH", "ILD", "SRC", "CREST"], correctAnswer: 1, explanation: "ILD.", source: "custom" },
        { id: "t54", text: "کدام بیماری با فشار خون بالا، افزایش کراتینین و MAHA در اسکلرودرمی مشخص می‌شود؟", options: ["PAH", "ILD", "SRC (بحران کلیوی)", "CREST"], correctAnswer: 2, explanation: "SRC.", source: "custom" },
        { id: "t55", text: "کدام بیماری با زخم دهانی، زخم ژنیتال و یووئیت مشخص می‌شود؟", options: ["لوپوس", "بیماری بهجت", "سندرم شوگرن", "اسکلرودرمی"], correctAnswer: 1, explanation: "بهجت.", source: "custom" },
        { id: "t56", text: "کدام بیماری با خشکی چشم و دهان، بزرگی پاروتید و Anti-Ro مثبت مشخص می‌شود؟", options: ["لوپوس", "سندرم شوگرن", "اسکلرودرمی", "آرتریت روماتوئید"], correctAnswer: 1, explanation: "شوگرن.", source: "custom" },
        { id: "t57", text: "کدام بیماری با پورپورای قابل لمس، درد شکم و آرتریت در کودکان مشخص می‌شود؟", options: ["لوپوس", "واسکولیت IgA (HSP)", "بیماری بهجت", "آرتریت روماتوئید"], correctAnswer: 1, explanation: "HSP.", source: "custom" },
        { id: "t58", text: "کدام بیماری با سردرد، تندرنس اسکالپ و ESR بالا در سالمندان مشخص می‌شود؟", options: ["آرتریت تمپورال (GCA)", "تاکایاسو", "پلی آرتریت ندوزا", "وگنر"], correctAnswer: 0, explanation: "GCA.", source: "custom" },
        { id: "t59", text: "کدام بیماری با نبض‌های ضعیف، فشار خون غیرقرینه و ESR بالا در زنان جوان مشخص می‌شود؟", options: ["آرتریت تمپورال (GCA)", "تاکایاسو", "پلی آرتریت ندوزا", "وگنر"], correctAnswer: 1, explanation: "تاکایاسو.", source: "custom" },
        { id: "t60", text: "کدام بیماری با سینوزیت راجعه، خونریزی ریه و GN مشخص می‌شود؟", options: ["آرتریت تمپورال (GCA)", "تاکایاسو", "گرانولوماتوز وگنر (GPA)", "پلی آرتریت ندوزا"], correctAnswer: 2, explanation: "GPA.", source: "custom" }
    ]
};
