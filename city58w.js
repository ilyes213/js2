 function updateCities() {
        var stateSelect = document.getElementById("state");
        var citySelect = document.getElementById("city");
        var state = stateSelect.value;
        citySelect.innerHTML = ""; // تفريغ الخيارات السابقة

        switch (state) {
            case "01 - Adrar":
               addOption(citySelect, "أدرار (Adrar)");
addOption(citySelect, "أقبلة (Akabli)");
addOption(citySelect, "أولاد عيسى (Ouled Aïssa)");
addOption(citySelect, "تماسين (Tamest)");
addOption(citySelect, "تسابيت (Tsabit)");
addOption(citySelect, "بودة (Bouda)");
addOption(citySelect, "زاوية كنتة (Zaouiet Kounta)");
addOption(citySelect, "أولاد أحمد تيمي (Ouled Ahmed Timmi)");
addOption(citySelect, "تامينصا (Tamantit)");
addOption(citySelect, "أركيز (Reggane)");
                break;
            case "02 Chlef":
              addOption(citySelect, "شلف (Chlef)");
addOption(citySelect, "تنس (Ténès)");
addOption(citySelect, "بني حواء (Beni Haoua)");
addOption(citySelect, "الكريمية (El Karimia)");
addOption(citySelect, "تاوقريت (Taougrit)");
addOption(citySelect, "بني راشد (Beni Rached)");
addOption(citySelect, "الدوادمي (El Hadjadj)");
addOption(citySelect, "الحمادنة (El Hammadia)");
addOption(citySelect, "العطاف (El Attaf)");
addOption(citySelect, "بوقادير (Bouzeghaïa)");
addOption(citySelect, "وادي الفضة (Oued Sly)");
addOption(citySelect, "أوماش (Oum Drou)");
addOption(citySelect, "حرشون (Harchoun)");
addOption(citySelect, "الأربعاء (Ain Merane)");
addOption(citySelect, "شتمة (Chettia)");
addOption(citySelect, "الحوضان (Hadjadj)");
addOption(citySelect, "وادي رحمة (Oued Fodda)");

                break;
            case "03 Laghouat":
               addOption(citySelect, "الأغواط (Aougrout)");
addOption(citySelect, "أفلو (Aflou)");
addOption(citySelect, "تاقديمت (Tagdemt)");
addOption(citySelect, "بني عباس (Beni Abbas)");
addOption(citySelect, "بريزينة (Brezina)");
addOption(citySelect, "تادمايت (Tadmait)");
addOption(citySelect, "الحاجب (El Hajebe)");
addOption(citySelect, "تاجموت (Tadjmout)");
addOption(citySelect, "الراقوبة (El Regguiba)");
addOption(citySelect, "الصومعة (Soumaa)");
addOption(citySelect, "زعفران (Zaouafrene)");
addOption(citySelect, "تاجروت (Tadjroudt)");
addOption(citySelect, "بني مشيش (Beni Messous)");
addOption(citySelect, "بلعامرية (Belaamriya)");
addOption(citySelect, "بلعيبات (Belaibat)");
addOption(citySelect, "برقيق (Barkaig)");
addOption(citySelect, "المختار (El Mokhtar)");
addOption(citySelect, "السعادة (Es-Saada)");
addOption(citySelect, "الخنق (El Kheng)");
addOption(citySelect, "الكافور (El Kaafour)");
addOption(citySelect, "العساف (L'Assef)");
addOption(citySelect, "الصفصاف (Safsaf)");
addOption(citySelect, "الطريش (Et-Tariche)");
addOption(citySelect, "الفيلة (El Feïla)");
addOption(citySelect, "الحسنية (El Hassania)");
addOption(citySelect, "حمر النواصر (Hammara)");
addOption(citySelect, "خمسة (Khemissa)");
addOption(citySelect, "محمد بوضياف (Mohamed Boudiaf)");
addOption(citySelect, "سفيان (Sfiane)");
addOption(citySelect, "سيدي أقليم (Sidi Akilim)");
addOption(citySelect, "سيدي مخلوف (Sidi M'Hamed Bouqalb)");
addOption(citySelect, "سيدي سعادة (Sidi Saada)");
addOption(citySelect, "طويلة (Touilat)");
addOption(citySelect, "عين الريش (Ain Larich)");
addOption(citySelect, "عين الصفصاف (Ain Safsaf)");
addOption(citySelect, "عين سيدي علي (Ain Sidi Ali)");
addOption(citySelect, "عين تابي (Ain Tabe)");
addOption(citySelect, "عين قزام (Ain Guazzam)");
addOption(citySelect, "فريب (Freyb)");
addOption(citySelect, "قرية البحر (Gueriat El Bahri)");
addOption(citySelect, "كفر ناصر (Kafr Nasser)");
addOption(citySelect, "لواعاش (Lwaâch)");
addOption(citySelect, "مرسيليا (Marseille)");
addOption(citySelect, "محمد بن بوزيان (Mohamed Ben Bouziane)");
addOption(citySelect, "مغير (Mouguer)");
addOption(citySelect, "معلم (Maalem)");
addOption(citySelect, "نقاوس (Nekkous)");
addOption(citySelect, "وادي سلي (Oued Sebâl)");

                break;
				
				 case "04 Oum El Bouaghi":
               addOption(citySelect, "أم البواقي (Oum El Bouaghi)");
addOption(citySelect, "بريكة (Bir Bouhouche)");
addOption(citySelect, "عين ببوش (Aïn Beïda)");
addOption(citySelect, "عين فكرون (Aïn Fekan)");
addOption(citySelect, "العامرة (Aïn M’lila)");
addOption(citySelect, "باتنة (Batenah)");
addOption(citySelect, "قصر الشلالة (Qasr Echalla)");
addOption(citySelect, "بومرداس (Boumerdas)");
addOption(citySelect, "زرزازات (Zerzazat)");
addOption(citySelect, "السواقي (Sawaki)");
addOption(citySelect, "فكيرينة (Fkirina)");
addOption(citySelect, "قصر الحيران (Qasr El Hirane)");
addOption(citySelect, "عين طاية (Ain Touta)");
addOption(citySelect, "عين زحيا (Ain Zehira)");
addOption(citySelect, "عين الديس (Ain Diss)");
addOption(citySelect, "قصر الصبايا (Qasr Esbaia)");
addOption(citySelect, "حمام النبايل (Hammam Nbail)");
addOption(citySelect, "مسكيانة (M’sikiana)");
addOption(citySelect, "حملايل (Hamlaïl)");
addOption(citySelect, "سيقوس (Sïkoussa)");

                break;
				
				 case "05 Batna":
                addOption(citySelect, "باتنة (Batna)");
addOption(citySelect, "مسعد (Meskiana)");
addOption(citySelect, "بومتة (Boumâata)");
addOption(citySelect, "سوق الأهراس (Souk Ahras)");
addOption(citySelect, "برج العطش (Bordj El Atteuf)");
addOption(citySelect, "تازولت (Tazoult)");
addOption(citySelect, "تيغانمين (Tighanimine)");
addOption(citySelect, "تكوت (T'Kout)");
addOption(citySelect, "المعمورة (M'Chouneche)");
addOption(citySelect, "تازيالت (Tazialt)");
addOption(citySelect, "الرحبات (El Rouhbat)");
addOption(citySelect, "الشمر (El Chir)");
addOption(citySelect, "أيت نوال مهريز (Aït Naoual Mezri)");
addOption(citySelect, "ليزة (Lizera)");
addOption(citySelect, "الفيض (El Fedj)");
addOption(citySelect, "اورلال (Ourlal)");
addOption(citySelect, "بريكة (Berriche)");
addOption(citySelect, "العلمة (El Eulma)");
addOption(citySelect, "مكمن بن عمر (Mechmoum Ben Okba)");
addOption(citySelect, "العجان (Aïn Touta)");
                break;
				
				 case "06 Béjaïa":
                addOption(citySelect, "بجاية (Béjaïa)");
addOption(citySelect, "أميزور (Amizour)");
addOption(citySelect, "أميزور الموسعة (Amizour El M'Saâfa)");
addOption(citySelect, "برباشة (Barbacha)");
addOption(citySelect, "بني معوش (Beni Maouche)");
addOption(citySelect, "بني شوقان (Beni Chougran)");
addOption(citySelect, "بوحنيفية (Bouhamza)");
addOption(citySelect, "تازملت (Tazmalt)");
addOption(citySelect, "تازوت (Tazoult)");
addOption(citySelect, "تيمزريت (Tibane)");
addOption(citySelect, "تيمزريت الموسعة (Tibane El M'Saâfa)");
addOption(citySelect, "تيشي (Tichy)");
addOption(citySelect, "تيفرة (Tifra)");
addOption(citySelect, "تيزي نبربر (Tizi N'Berber)");
addOption(citySelect, "تيشي (Tizi N'Tleta)");
addOption(citySelect, "زرورق (Z'Zorbour)");
addOption(citySelect, "بريرة (Brihmat)");
addOption(citySelect, "فناية المعية (Fenaïa Il Maten)");
addOption(citySelect, "كرفور (Kerfou)");
addOption(citySelect, "خراطة (Kherrata)");
addOption(citySelect, "مسيسا (M'Sissa)");
addOption(citySelect, "أوقاس (Oued Ghir)");
addOption(citySelect, "الأكروم (El Kseur)");
addOption(citySelect, "سوق الإثنين (Souk El Thenine)");
addOption(citySelect, "سيدي عيسى (Sidi Ayad)");
                break;
				
				 case "07 Biskra":
              // إضافة بلديات ولاية بسكرة إلى قائمة الاختيار

addOption(citySelect, "بسكرة (Biskra)");
addOption(citySelect, "أورلال (Ourlal)");
addOption(citySelect, "الدويرة (Douira)");
addOption(citySelect, "أريس (Aïn Naga)");
addOption(citySelect, "الغروس (El Ghrous)");
addOption(citySelect, "الحدائق (El Hadjeb)");
addOption(citySelect, "الحوش (El Haouch)");
addOption(citySelect, "بني خداش (Beni H'Dache)");
addOption(citySelect, "بني زيد (Bni Zaid)");
addOption(citySelect, "بورقيقة (Bouraoui Belhadef)");
addOption(citySelect, "بوطوالة (Bouchagroune)");
addOption(citySelect, "برانيس (Brannès)");
addOption(citySelect, "الشوق (Chetma)");
addOption(citySelect, "دوارة (Dhura)");
addOption(citySelect, "الخنق (El Kantara)");
addOption(citySelect, "قنزات (Khenguet Sidi Nadjloul)");
addOption(citySelect, "مقرة (M'cif)");
addOption(citySelect, "مقرة (M'Lili)");
addOption(citySelect, "مقرة (M'Lizène)");
addOption(citySelect, "مقرة (M'Ziraa)");
addOption(citySelect, "النزلة (N'Gaous)");
addOption(citySelect, "وادي الزناتي (Ouled Djellal)");
addOption(citySelect, "رأس الطابية (Ras El Miaad)");
addOption(citySelect, "سيدي خويلد (Sidi Khaled)");
addOption(citySelect, "سيدي عون (Sidi Okba)");
addOption(citySelect, "تولمونت (Tolga)");
addOption(citySelect, "زريبة الوادي (Zeribet El Oued)");

// يمكنك إضافة المزيد من البلديات بنفس الطريقة إذا كانت القائمة غير مكتملة

                break;
				
				 case "08 Bechar":
               // إضافة بلديات ولاية بشار إلى قائمة الاختيار
addOption(citySelect, "بشار (Béchar)");
addOption(citySelect, "أولاد خويلد (Ouled Khoudir)");
addOption(citySelect, "بوكايوس (Boukais)");
addOption(citySelect, "بني عباس (Beni Abbas)");
addOption(citySelect, "تابالبالت (Tabelbala)");
addOption(citySelect, "تامتمرت (Tamtert)");
addOption(citySelect, "كنيفرة (Kénadsa)");
addOption(citySelect, "بوقائد (Boukaid)");
addOption(citySelect, "بني زعرور (Beni Ikhlef)");
addOption(citySelect, "بني عون (Beni Ounif)");
addOption(citySelect, "بني والبان (Beni Oulbane)");
addOption(citySelect, "بوخليل (Boukhil)");
addOption(citySelect, "بني زيري (Beni Ziri)");
addOption(citySelect, "بوجلو (Boujellal)");
addOption(citySelect, "بني تامونت (Beni Tamou)");
addOption(citySelect, "بني بوسعيد (Beni Boussaïd)");
addOption(citySelect, "بني أبيدي (Beni Abidi)");
addOption(citySelect, "بني ونيف (Beni Ounif)");
addOption(citySelect, "بني إبن عمار (Beni Ighbane)");
addOption(citySelect, "بوسعادة (Bou Saâda)");

// يمكنك إضافة المزيد من البلديات بنفس الطريقة إذا كانت القائمة غير مكتملة

                break;
				
				 case "09 Blida":
                addOption(citySelect, "البليدة (Blida)");
addOption(citySelect, "بن خليل (Ben Khellil)");
addOption(citySelect, "العفرون (El Affroun)");
addOption(citySelect, "الأربعاء (El Arbaa)");
addOption(citySelect, "بوفاريك (Boufarik)");
addOption(citySelect, "شرشال (Chréa)");
addOption(citySelect, "الدويرة (Douira)");
addOption(citySelect, "موزاية (Mouzaïa)");
addOption(citySelect, "مقرة (Meftah)");
addOption(citySelect, "أولاد يعيش (Ouled Yaïch)");
addOption(citySelect, "سوق الخميس (Souk El Khemis)");

                break;
				
				 case "10 Bouira":
               addOption(citySelect, "البويرة (Bouira)");
addOption(citySelect, "بشلول (Bechloul)");
addOption(citySelect, "أغبالو (Aghbalou)");
addOption(citySelect, "القنة (El Khechna)");
addOption(citySelect, "الحاجب (El Hachimia)");
addOption(citySelect, "الحجاج (El Hadjadj)");
addOption(citySelect, "العش (El Asnam)");
addOption(citySelect, "اللقبة (Lakhdaria)");
addOption(citySelect, "مشد الله (Maala)");
addOption(citySelect, "أولاد رزاز (Ouled Rzaz)");
addOption(citySelect, "أولاد سلاّم (Ouled Slama)");
addOption(citySelect, "سعيدة (Sour El Ghozlane)");

                break;
				
				 case "11 Tamanrasset":
                addOption(citySelect, "تمنراست (Tamanrasset)");
addOption(citySelect, "إن زغمار (In Guezzam)");
addOption(citySelect, "تمنين (Tamanrasset)");
addOption(citySelect, "إن قزمان (In Guezzam)");
addOption(citySelect, "تين زواتين (Tin Zaouatine)");

                break;
				
				 case "12 Tébessa":
                addOption(citySelect, "تبسة (Tébessa)");
addOption(citySelect, "بئر العاتر (Bir El Ater)");
addOption(citySelect, "بئر مقرة (Bir Mokadem)");
addOption(citySelect, "العوينات (El Aouinet)");
addOption(citySelect, "العيون (El Ogla)");
addOption(citySelect, "الشريعة (Lahouidjbet)");
addOption(citySelect, "مرسط (Morsott)");
addOption(citySelect, "نقرين (Negrine)");
addOption(citySelect, "الوحات (Oum Ali)");
addOption(citySelect, "رقان (Rogassa)");
addOption(citySelect, "شبيطة (Souani)");
addOption(citySelect, "تسبة (Tébessa)");
addOption(citySelect, "ثليجان (Thlidjène)");
addOption(citySelect, "أولاد عدي لخضر (Ouled Aïssa)");

                break;
				
				 case "13 Tlemcene":
                addOption(citySelect, "تلمسان (Tlemcen)");
addOption(citySelect, "أبو الحسن (Aïn El Houtz)");
addOption(citySelect, "أم البواقي (Aïn Fezza)");
addOption(citySelect, "الغزوات (El Gor)");
addOption(citySelect, "جبالة (Jebala)");
addOption(citySelect, "مرسى بن مهيدي (Marsa Ben M'hidi)");
addOption(citySelect, "مرسى متليلي (Marsa Matrouh)");
addOption(citySelect, "مغنية (Maghnia)");
addOption(citySelect, "الشقفة (Sebdou)");
addOption(citySelect, "سوق أهراس (Souahlia)");
addOption(citySelect, "سيدي الدبيل (Sidi Djillali)");
addOption(citySelect, "سيدي العبدلي (Sidi Abdelli)");
addOption(citySelect, "سيدي بومدين (Sidi Boumediene)");
addOption(citySelect, "طنبالة (Terni Beni Hediel)");
addOption(citySelect, "الزبوجة (Zenata)");

                break;
				
				 case "14 Tiaret":
                addOption(citySelect, "تيارت (Tiaret)");
addOption(citySelect, "عين الحديد (Aïn El Hadid)");
addOption(citySelect, "عين كرمس (Aïn Kermes)");
addOption(citySelect, "عين دزاريت (Aïn Dzarit)");
addOption(citySelect, "عين الكرمة (Aïn Kermoussa)");
addOption(citySelect, "عين الديس (Aïn Deheb)");
addOption(citySelect, "بلاعة (Belaïbat)");
addOption(citySelect, "بوحنيفية (Bou-Hanifia)");
addOption(citySelect, "البراق (Brahimia)");
addOption(citySelect, "شحوح (Chehaima)");
addOption(citySelect, "دحموني (Dahmouni)");
addOption(citySelect, "فرندة (Frenda)");
addOption(citySelect, "قصر الحيران (Ksar Chellala)");
addOption(citySelect, "مليليحة (Mellakou)");
addOption(citySelect, "ميلة (Mellaha)");
addOption(citySelect, "مشرع الحمام (Mechraâ Houari B)");
addOption(citySelect, "ندرومة (Nadorah)");
addOption(citySelect, "الرشايقة (Rahaynia)");
addOption(citySelect, "سيدي عبد الرحمن (Sidi Abderrahmane)");
addOption(citySelect, "سيدي علي ملال (Sidi Ali Mellal)");
addOption(citySelect, "سيدي هجاج (Sidi Hosni)");
addOption(citySelect, "سيدي حسن (Sidi Hosni)");
addOption(citySelect, "ترقالة (Takhemaret)");
addOption(citySelect, "الزهراء (Zahana)");

                break;
				
				 case "15 Tizi Ouzou":
                addOption(citySelect, "تيزي وزو (Tizi Ouzou)");
addOption(citySelect, "أوزلاقن (Azeffoun)");
addOption(citySelect, "بوزغاية (Bouzguen)");
addOption(citySelect, "تازملت (Tazmalt)");
addOption(citySelect, "تيزي غنيف (Tizi Gheniff)");
addOption(citySelect, "ماغر (Makouda)");
addOption(citySelect, "ميشليفن (Michelet)");
addOption(citySelect, "أذرار (Azzazga)");
addOption(citySelect, "الفلاي (Aït Yahia)");
addOption(citySelect, "القلة (Aït Khelili)");
addOption(citySelect, "المالح (Aït Mahmoud)");
addOption(citySelect, "المكمن (Aït Boumahdi)");
addOption(citySelect, "البنيان (Aït Bouaddou)");
addOption(citySelect, "برقو (Berkouka)");
addOption(citySelect, "بوزقام (Bouzeguene)");
addOption(citySelect, "درب الأعشاب (Draâ El Mizan)");
addOption(citySelect, "دويس (Douar El Ma)");
addOption(citySelect, "فرعون (Freha)");
addOption(citySelect, "إيلولة (Iferhounène)");
addOption(citySelect, "أيت عباس (Aït Abbas)");
addOption(citySelect, "إيفلو (Ifigha)");
addOption(citySelect, "إغيل علي (Ighil Ali)");
addOption(citySelect, "إغيل بوحانة (Ighil Bougueni)");
addOption(citySelect, "إغيل علي (Ighil Ali)");
addOption(citySelect, "تيفري (Tifraine)");
addOption(citySelect, "زيتونة (Zitouna)");

                break;
				
				 case "16 Alger":
                addOption(citySelect, "الجزائر (Alger)");
addOption(citySelect, "باب الواد (Bab El Oued)");
addOption(citySelect, "بن عكنون (Ben Aknoun)");
addOption(citySelect, "بني مسوس (Bir Mourad Raïs)");
addOption(citySelect, "بوزريعة (Bouzaréah)");
addOption(citySelect, "الدار البيضاء (Dar El Beïda)");
addOption(citySelect, "الشراقة (El Harrach)");
addOption(citySelect, "حرازة (El Madania)");
addOption(citySelect, "حيدرة (Hydra)");
addOption(citySelect, "كوباني (Kouba)");
addOption(citySelect, "محمد بلوزداد (Mohamed Belouizdad)");
addOption(citySelect, "المرسى (El Marsa)");
addOption(citySelect, "المحمدية (El Mohammadia)");
addOption(citySelect, "بئر خادم (Bir Khadem)");
addOption(citySelect, "بوفاريك (Boufarik)");
addOption(citySelect, "بومرداس (Boumerdès)");
addOption(citySelect, "الصبحة (Bourouba)");
addOption(citySelect, "رغاية (Reghaïa)");
addOption(citySelect, "رود الفارس (Rouïba)");
addOption(citySelect, "سعيد حمدين (Saoula)");
addOption(citySelect, "سيدي موسى (Sidi M'Hamed)");
addOption(citySelect, "تسالة لمطار (Tessala El Merdja)");
addOption(citySelect, "زرالدة (Zéralda)");

                break;
				
				 case "17 Djelfa":
                addOption(citySelect, "الجلفة (Djelfa)");
addOption(citySelect, "عين الإبل (Ain El Ibel)");
addOption(citySelect, "عين فقه (Ain Fekan)");
addOption(citySelect, "بن يعقوب (Benyagoub)");
addOption(citySelect, "بريش (Birine)");
addOption(citySelect, "القارة (Charef)");
addOption(citySelect, "دلس (Deldoul)");
addOption(citySelect, "الدوسن (Djilali Ben Amar)");
addOption(citySelect, "القنادسة (El Guettar)");
addOption(citySelect, "الحاج محمد (El Hassi)");
addOption(citySelect, "المنصورة (El Khemis)");
addOption(citySelect, "فيض البطمة (Faidh El Botma)");
addOption(citySelect, "حسن عبدالكريم (Hassi Bahbah)");
addOption(citySelect, "جلول (Hassi El Euch)");
addOption(citySelect, "مسعد (Messaad)");
addOption(citySelect, "سيدي لعجال (Sidi Ladjel)");
addOption(citySelect, "الشارف (Selmana)");

                break;
				
				 case "18 Jijel":
               addOption(citySelect, "جيجل (Jijel)");
addOption(citySelect, "الأراضي الكيفانية (Arbaa Taourirt)");
addOption(citySelect, "العيون (El Aouana)");
addOption(citySelect, "الحوز (El Ancer)");
addOption(citySelect, "بوشقوف (Boussif Ouled Askeur)");
addOption(citySelect, "الجمعة (Djemaa Beni Habibi)");
addOption(citySelect, "جيجل (Jijel)");
addOption(citySelect, "كراكدة (Kheraïcia)");
addOption(citySelect, "مليلة (Mila)");
addOption(citySelect, "سيدي عبد العزيز (Sidi Abdelaziz)");
addOption(citySelect, "سطاوالي (Stah Guentis)");
addOption(citySelect, "طاهر (Taher)");
addOption(citySelect, "تازمالت (Tassoust)");
addOption(citySelect, "تازغيموت (Tazgaït)");

                break;
				
				 case "19 Sétif":
                addOption(citySelect, "سطيف (Sétif)");
addOption(citySelect, "عين أرنات (Ain Arnat)");
addOption(citySelect, "عين أزلة (Ain Azel)");
addOption(citySelect, "عين الكرمة (Ain El Kebira)");
addOption(citySelect, "عين الطويلة (Ain Lahdjar)");
addOption(citySelect, "عين ولمان (Ain Oulmène)");
addOption(citySelect, "بئر حدادة (Bir Haddada)");
addOption(citySelect, "بني ولبانة (Béni Ourtilane)");
addOption(citySelect, "بوزقزة (Bouandas)");
addOption(citySelect, "بني فودة (Bougaâ)");
addOption(citySelect, "بني أنصار (Bousselam)");
addOption(citySelect, "جميلة (Djemila)");
addOption(citySelect, "عموشة (El Amra)");
addOption(citySelect, "العلمة (El Eulma)");
addOption(citySelect, "قعفور (Guellal)");
addOption(citySelect, "الحجار (Hammam Essokhna)");
addOption(citySelect, "أحفير (Hammam Guergour)");
addOption(citySelect, "خلوية (Khelouia)");
addOption(citySelect, "معاوية (Maouia)");
addOption(citySelect, "مصالح (M'sila)");
addOption(citySelect, "مزلوق (Mzala)");
addOption(citySelect, "عين السلطان (Ouled Sabor)");
addOption(citySelect, "رأس العيون (Rasfa)");
addOption(citySelect, "سطائف (Sétif)");
addOption(citySelect, "سرج الغول (Serdj El Ghoul)");
addOption(citySelect, "تابلاط (Talaifacene)");
addOption(citySelect, "تامزورة (Taya)");
addOption(citySelect, "تيزي نبشار (Tizi N'bechar)");
addOption(citySelect, "زرزاور (Zerzara)");

                break;
				
				 case "20 Saïda":
                addOption(citySelect, "سعيدة (Saïda)");
addOption(citySelect, "عين الكبيرة (Ain El Kebira)");
addOption(citySelect, "عين الحجر (Ain Lahjar)");
addOption(citySelect, "عين سلطان (Ain Soltane)");
addOption(citySelect, "بوزينة (Bouziane)");
addOption(citySelect, "قديل (Djidjelli)");
addOption(citySelect, "الفحول (El Hassasna)");
addOption(citySelect, "القصبة (El Khemis)");
addOption(citySelect, "موكناس (Moulay Larbi)");
addOption(citySelect, "سيدي أحمد (Sidi Ahmed)");
addOption(citySelect, "تاوزيانت (Touzina)");

                break;
				
				 case "21 Skikda":
                addOption(citySelect, "سكيكدة (Skikda)");
addOption(citySelect, "أيت نوال موشي (Ain Bouziane)");
addOption(citySelect, "عزابة (Azzaba)");
addOption(citySelect, "الزيتونة (Bekkouche Lakhdar)");
addOption(citySelect, "الحساسنة (El Hadaik)");
addOption(citySelect, "العرب (El Harrouch)");
addOption(citySelect, "قلب الزناتي (Kerkera)");
addOption(citySelect, "مرسى الزهور (Marsa Es Skhira)");
addOption(citySelect, "أولاد عطية (Ouled Attia)");
addOption(citySelect, "أولاد حبابة (Ouled Hebaba)");
addOption(citySelect, "أولاد موسى (Ouled Mimoun)");
addOption(citySelect, "الزموري (Zitouna)");

                break;
				
				 case "22 Sidi Bel Abbès":
                addOption(citySelect, "سيدي بلعباس (Sidi Bel Abbès)");
addOption(citySelect, "عين البرد (Ain El Berd)");
addOption(citySelect, "تسالة لمطاعي (Tessala Lamatai)");
addOption(citySelect, "تلموني (Telagh)");
addOption(citySelect, "مولاي سليسي (Moulay Slissi)");
addOption(citySelect, "سيدي علي بوشاب (Sidi Ali Boussidi)");
addOption(citySelect, "سفيزف (Sfisef)");
addOption(citySelect, "تنيرة (Tenira)");

                break;
				

                break;
				
				 case "23 Annaba":
              addOption(citySelect, "Annaba - عنابة");
addOption(citySelect, "Berrahel - برحال");
addOption(citySelect, "El Hadjar - الحجار");
addOption(citySelect, "Eulma - العلمة");
addOption(citySelect, "El Bouni - البوني");
addOption(citySelect, "Oued El Aneb - وادي العنب");
addOption(citySelect, "Cheurfa - الشرفاء");
addOption(citySelect, "Seraidi - سرايدي");
addOption(citySelect, "Ain Berda - العين الباردة");
addOption(citySelect, "Chetaibi - شطايبي");
addOption(citySelect, "Sidi Amar - سيد عامر");
addOption(citySelect, "Treat - التريعات");


                break;
				
				 case "24 Guelma":
         addOption(citySelect, "قالمة (Guelma)");
addOption(citySelect, "بن داود (Ben Dhaoued)");
addOption(citySelect, "الرصفة (Aïn Ben Beida)");
addOption(citySelect, "الشريعة (Aïn Larbi)");
addOption(citySelect, "برج سعيد (Bordj Sabat)");
addOption(citySelect, "الدريعة (Dahouara)");
addOption(citySelect, "دهواش (Dahouche)");
addOption(citySelect, "حمام دباغ (Hammam Debagh)");
addOption(citySelect, "هواري بومدين (Houari Boumediene)");
addOption(citySelect, "زرقان (Oued Zenati)");


                break;
				
				 case "25 Constantine":
               addOption(citySelect, "عين عبيد (Aïn Abid)");
addOption(citySelect, "عين السمارة (Aïn Smara)");
addOption(citySelect, "بني حميدان (Beni Hamiden)");
addOption(citySelect, "قسنطينة (Constantine)");
addOption(citySelect, "ديدوش مراد (Didouche Mourad)");
addOption(citySelect, "الخروبة (El Khroub)");
addOption(citySelect, "حمى بوزيان (Hamma Bouziane)");
addOption(citySelect, "ابن باديس (Ibn Badis)");
addOption(citySelect, "ابن زياد (Ibn Ziad)");
addOption(citySelect, "مسعود بوجريو (Messaoud Boudjriou)");
addOption(citySelect, "أولاد رحمون (Ouled Rahmoune)");
addOption(citySelect, "زيغود يوسف (Zighoud Youcef)");

                break;
				
				 case "26 Médéa":
                addOption(citySelect, "مدية (Médéa)");
addOption(citySelect, "العفرون (El Afroune)");
addOption(citySelect, "برج عمر إدريس (Bordj El Emir Abdelkader)");
addOption(citySelect, "بوقاعة (Bouaichia)");
addOption(citySelect, "تامزورة (Tablat)");
addOption(citySelect, "الحوضان (Chelalet El Adhaoura)");
addOption(citySelect, "الدوسن (Derrag)");
addOption(citySelect, "حمام ريغة (El Hamdania)");
addOption(citySelect, "قصر الأحمر (Ksar El Boukhari)");
addOption(citySelect, "أولاد بوجمعة (Ouled Bouachra)");
addOption(citySelect, "سيدي نعمان (Sidi Naâmane)");
addOption(citySelect, "سيدي زيان (Sidi Ziane)");
addOption(citySelect, "تمسقيدة (Tamesguida)");
addOption(citySelect, "تيلاتو (Tlatet Ouariaghel)");

                break;
				
				 case "27 Mostaganem":
                addOption(citySelect, "مستغانم (Mostaganem)");
addOption(citySelect, "عين نويسي (Ain Nouissy)");
addOption(citySelect, "أرزيو (Arzew)");
addOption(citySelect, "أيت نوالمحمدية (Ain Tedeles)");
addOption(citySelect, "بن عباد (Benabdelmalek Ramdane)");
addOption(citySelect, "بوشقار (Bouguirat)");
addOption(citySelect, "حاسي ماماش (Hassi Mameche)");
addOption(citySelect, "خضرة (Kheir Eddine)");
addOption(citySelect, "مزغران (Mansourah)");
addOption(citySelect, "مسرغين (Mesra)");
addOption(citySelect, "نكيب (Nekmaria)");
addOption(citySelect, "ورقلة (Ouled Boughalem)");
addOption(citySelect, "ستيدية (Sidi Bellater)");
addOption(citySelect, "سيدي لخضر (Sidi Lakhdar)");
addOption(citySelect, "سيدي مقدم (Sidi M'Hamed Benali)");
addOption(citySelect, "سوافلية (Sour)");
addOption(citySelect, "تازقزاوت (Tazgait)");
addOption(citySelect, "تيجنين (Tijdit)");
addOption(citySelect, "زرغون (Zergoun)");

                break;
				
				 case "28 MSila":
               addOption(citySelect, "المسيلة (M'Sila)");
addOption(citySelect, "عين المعاني (Ain El Melh)");
addOption(citySelect, "أم العظام (Ain El Hadjel)");
addOption(citySelect, "بوسعادة (Bou Saada)");
addOption(citySelect, "برهوم (Bir Foda)");
addOption(citySelect, "سيدي عيسى (Sidi Aissa)");
addOption(citySelect, "تامسة (Tamsa)");
addOption(citySelect, "ظهرة العيون (Dhouab)");
addOption(citySelect, "مقرة (Maarif)");
addOption(citySelect, "مسيف (M'cif)");
addOption(citySelect, "مخازن (M'khadra)");
addOption(citySelect, "سيدي عامر (Sidi Ameur)");
addOption(citySelect, "سيدي سليمان (Sidi Slimane)");
addOption(citySelect, "ثليجان (Tlidjen)");

                break;
				
				 case "29 Mascara":
                addOption(citySelect, "معسكر (Mascara)");
addOption(citySelect, "عين فكرون (Ain Fekan)");
addOption(citySelect, "عين العربي (Ain Ferah)");
addOption(citySelect, "عين فقه (Ain Fekka)");
addOption(citySelect, "بنين (Benian)");
addOption(citySelect, "بوجمعة (Bou Henni)");
addOption(citySelect, "الغيشانية (Ghriss)");
addOption(citySelect, "حسن عبدالقادر (Hassaine Abdelkader)");
addOption(citySelect, "منصورية (Mansourah)");
addOption(citySelect, "مزغنة (Oued El Abtal)");
addOption(citySelect, "سيدي عبد الجبار (Sidi Abdeldjebar)");
addOption(citySelect, "تيغنيف (Tighennif)");

                break;
				
				 case "30 Ouargla":
                addOption(citySelect, "ورقلة (Ouargla)");
addOption(citySelect, "بني ثور (Béni Thour)");
addOption(citySelect, "حاسي مسعود (Hassi Messaoud)");
addOption(citySelect, "بورقيقة (Bouraoui Belhadef)");
addOption(citySelect, "الخضراء (El Hadjira)");
addOption(citySelect, "تماسين (Témacine)");

                break;
				
				 case "31 Oran":
               addOption(citySelect, "وهران (Oran)");
addOption(citySelect, "أرزيو (Arzew)");
addOption(citySelect, "بوتليليس (Bethioua)");
addOption(citySelect, "بوفاريك (Boufariik)");
addOption(citySelect, "وهران (Es Senia)");
addOption(citySelect, "مرسى بن مهيدي (Mers El Hadjadj)");
addOption(citySelect, "المرسى الكبير (Mers El Kebir)");
addOption(citySelect, "المرسى (Mers El Hadjadj)");
addOption(citySelect, "بوسفر (Bousfer)");
addOption(citySelect, "البليدة (El Boulaida)");
addOption(citySelect, "البويرة (El Kerma)");
addOption(citySelect, "الكرمة (El Kerma)");
addOption(citySelect, "المسيو (El Messid)");
addOption(citySelect, "حاسي بن عبد الله (Hassi Bounif)");
addOption(citySelect, "النقية (Sidi Ben Yebka)");
addOption(citySelect, "تافراوت (Tafraoui)");
addOption(citySelect, "الأربعاء (Ain El Turck)");
addOption(citySelect, "بوتليليس (Bethioua)");
addOption(citySelect, "سيدي الشحمي (Sidi Chahmi)");
addOption(citySelect, "عين الترك (Ain Turk)");
addOption(citySelect, "تافراوت (Tafraoui)");

                break;
				
				 case "32 El Bayadh":
                addOption(citySelect, "البيض (El Bayadh)");
addOption(citySelect, "بريكة (Brezina)");
addOption(citySelect, "قروينة (Chellala)");
addOption(citySelect, "شلالة الأذن (Cheguig)");
addOption(citySelect, "غاسول (Ghassoul)");
addOption(citySelect, "قصر الباهية (Kef Lakhdar)");
addOption(citySelect, "بوشقوف (Rogassa)");

                break;
				
				 case "33 Illizi":
                addOption(citySelect, "إليزي (Illizi)");
addOption(citySelect, "عين صالح (Ain Salah)");
addOption(citySelect, "دبداب (Djanet)");

                break;
				
				 case "34 Bordj Bou Arreridj":
                addOption(citySelect, "برج بوعريريج (Bordj Bou Arreridj)");
addOption(citySelect, "رأس العيون (Ras El Oued)");
addOption(citySelect, "بليمور (Belimour)");
addOption(citySelect, "المقرن (El M'hir)");
addOption(citySelect, "بن داود (Ben Daoud)");
addOption(citySelect, "بن شكاو (Beni Otsmane)");
addOption(citySelect, "بن يليل (Beni Yellène)");
addOption(citySelect, "برج زمورة (Bordj Zemoura)");
addOption(citySelect, "الحمراء (El Hamadia)");
addOption(citySelect, "خليل (Khillil)");
addOption(citySelect, "منيارة (Mansoura)");
addOption(citySelect, "مقدونيس (M'kedra)");
addOption(citySelect, "أولاد داود (Ouled Dahmane)");
addOption(citySelect, "أولاد غراب (Ouled Ghir)");
addOption(citySelect, "أولاد رزاز (Ouled R'houzlane)");
addOption(citySelect, "زوج أحمد (Z'hor Ahmed)");

                break;
				
				 case "35 Boumerdes":
               addOption(citySelect, "بومرداس (Boumerdes)");
addOption(citySelect, "عزابة (Amizour)");
addOption(citySelect, "بن شود (Ben Choud)");
addOption(citySelect, "برج منايل (Bordj Menaiel)");
addOption(citySelect, "ساوا (Corso)");
addOption(citySelect, "دلس (Dellys)");
addOption(citySelect, "قرواية (Djinet)");
addOption(citySelect, "قلتة سيدي العيد (Guerrouma)");
addOption(citySelect, "قرواية (Khemis El Khechna)");
addOption(citySelect, "ناخل (Naciria)");
addOption(citySelect, "بني عمران (Thenia)");
addOption(citySelect, "زموري (Tidjelabine)");

                break;
				
				 case "36 El Tarf":
                addOption(citySelect, "الطارف (El Tarf)");
addOption(citySelect, "بوثلجة (Bouteldja)");
addOption(citySelect, "بريج خديج (Bouchtata)");
addOption(citySelect, "درارية (Drean)");
addOption(citySelect, "الحمامات (El Aioun)");
addOption(citySelect, "الخضراء (El Kala)");
addOption(citySelect, "المرسى (El Marsa)");
addOption(citySelect, "بن مهيدي (Ben M'hidi)");
addOption(citySelect, "زيتونة (Zitouna)");
addOption(citySelect, "أم العظايم (Ain El Assel)");
addOption(citySelect, "البراهمية (Berrihane)");

                break;
				
				 case "37 Tindouf":
                addOption(citySelect, "تندوف (Tindouf)");

                break;
				
				 case "38 Tissemsilt":
                addOption(citySelect, "تسمسيلت (Tissemsilt)");
addOption(citySelect, "برج بونعامة (Bordj Bounaama)");
addOption(citySelect, "برج العش (Bordj El Emir Abdelkader)");
addOption(citySelect, "لرجام (Lardjem)");
addOption(citySelect, "مليليحة (Melaab)");
addOption(citySelect, "وسلان (Ouled Bessem)");
addOption(citySelect, "ثنية الحد (Théniet El Had)");

                break;
				
				 case "39 Eloued":
                addOption(citySelect, "الوادي (El Oued)");
addOption(citySelect, "عين البيضاء (Ain Beida)");
addOption(citySelect, "بن قشة (Beni Guecha)");
addOption(citySelect, "بني زوالة (Bni Zouayel)");
addOption(citySelect, "الخروبة (El Khroub)");
addOption(citySelect, "المقرن (El Meghaier)");
addOption(citySelect, "حمري (Hassi Khelifa)");
addOption(citySelect, "الرويسات (Robbah)");

                break;
				
				 case "40 Khenchela":
                addOption(citySelect, "خنشلة (Khenchela)");
addOption(citySelect, "الحامة (El Hamma)");
addOption(citySelect, "بابار (Babar)");
addOption(citySelect, "بلعلة خير الدين (Blaad El Khiar)");
addOption(citySelect, "المحمل (El Mahmal)");
addOption(citySelect, "متليلي (M'toussa)");
addOption(citySelect, "أوم الدروع (Oum El Adhaim)");
addOption(citySelect, "رأس العيون (Ras El Aioun)");
addOption(citySelect, "تاقمورث (Taouzianat)");

                break;
				
				 case "41 Souk Ahras":
                addOption(citySelect, "سوق أهراس (Souk Ahras)");
addOption(citySelect, "عين قرناص (Ain Kercha)");
addOption(citySelect, "عين سلطان (Ain Soltane)");
addOption(citySelect, "العوانة (Ain Zana)");
addOption(citySelect, "بئر الشهداء (Bir Bouhouche)");
addOption(citySelect, "خنقة سيدي ناجي (Khanga Sidi Nadji)");
addOption(citySelect, "مذكار (M'doukal)");
addOption(citySelect, "مسكيانة (Meskiana)");
addOption(citySelect, "أولاد موسى (Ouled Moussa)");

                break;
				
				 case "42 Tipaza":
               addOption(citySelect, "تيبازة (Tipaza)");
addOption(citySelect, "شرشال (Cherchell)");
addOption(citySelect, "داموس (Damous)");
addOption(citySelect, "غرزو (Gouraya)");
addOption(citySelect, "حجوط (Hadjout)");
addOption(citySelect, "مرادية (Merad)");
addOption(citySelect, "مسلمون (Messelmoun)");
addOption(citySelect, "الزبيرية (Sidi Amar)");
addOption(citySelect, "سيدي رزيق (Sidi Rached)");
addOption(citySelect, "حمادية (Hammamet)");

                break;
				
				 case "43 Mila":
               addOption(citySelect, "ميلة (Mila)");
addOption(citySelect, "العيون (Ain Beida)");
addOption(citySelect, "عين تموشنت (Ain Témouchent)");
addOption(citySelect, "عين قنية (Ain Kechra)");
addOption(citySelect, "بن يحي (Benyahia Abderrahmane)");
addOption(citySelect, "بوحمدان (Bouhatem)");
addOption(citySelect, "سيدي خويلد (Chelghoum Laid)");
addOption(citySelect, "تادمايت (Tadjenanet)");
addOption(citySelect, "فرجيوة (Ferdjioua)");
addOption(citySelect, "قريبة (Grarem Gouga)");
addOption(citySelect, "تاجنة (Tassadane Haddada)");

                break;
				
				 case "44 Aïn Defla":
               addOption(citySelect, "عين الدفلى (Aïn Defla)");
addOption(citySelect, "عين العلوي (Aïn Lechiakh)");
addOption(citySelect, "بني عمران (Bir Ouled Khelifa)");
addOption(citySelect, "البرج (Boumedfaa)");
addOption(citySelect, "الحسينية (El Hassania)");
addOption(citySelect, "الحجاج (El Houaita)");
addOption(citySelect, "الصبحة (El Attaf)");
addOption(citySelect, "قمرت (Khemis Miliana)");
addOption(citySelect, "مليليح (Miliana)");
addOption(citySelect, "وادي العلايق (Rouina)");
addOption(citySelect, "تاكديمت (Takdemt)");

                break;
				
				 case "45 Naâma":
                addOption(citySelect, "النعامة (Naâma)");
addOption(citySelect, "عين الصفراء (Ain Sefra)");
addOption(citySelect, "عين بن خليل (Ain Ben Khelil)");
addOption(citySelect, "المخرم (Asla)");
addOption(citySelect, "بني عباس (Beni Ounif)");
addOption(citySelect, "سفيان (Mechraa Houari B)");

                break;
				
				 case "46 Aïn Témouchent":
                addOption(citySelect, "عين تموشنت (Aïn Témouchent)");
addOption(citySelect, "عين الكرمة (Aïn El Arbaa)");
addOption(citySelect, "بني حواء (Beni Saf)");
addOption(citySelect, "عين الحجر (Aghlal)");
addOption(citySelect, "عين الأربعاء (Aghlaqa)");
addOption(citySelect, "أم العسل (El Amria)");
addOption(citySelect, "سيدي بن عدة (Bouzedjar)");
addOption(citySelect, "تامزورة (Chentouf)");

                break;
				
				 case "47 Ghardaïa":
               addOption(citySelect, "غرداية (Ghardaïa)");
addOption(citySelect, "بني إزقن (Beni Isguen)");
addOption(citySelect, "المطار (El Menea)");
addOption(citySelect, "المزونة (Metlili Chaamba)");
addOption(citySelect, "زلفانة (Zelfana)");

                break;
				
				 case "48 Relizane":
                addOption(citySelect, "غليزان (Relizane)");
addOption(citySelect, "أم الصلالة (Ammi Moussa)");
addOption(citySelect, "بني دجيل (Bendaoud)");
addOption(citySelect, "بني زمنزم (Beni Zentis)");
addOption(citySelect, "جديل (Djidiouia)");
addOption(citySelect, "الحمادنة (El Guettar)");
addOption(citySelect, "مرج السعادنة (El Hamri)");
addOption(citySelect, "سيدي خالد (El Ouldja)");
addOption(citySelect, "منيارة (El Matmar)");
addOption(citySelect, "الناصرية (Oued El Djemaa)");
addOption(citySelect, "سيدي محمد بن علي (Sidi M'hamed Ben Ali)");

                break;
				
				 case "49 Timimoun":
                addOption(citySelect, "تميمون (Timimoun)");

                break;
				
				 case "50 Bordj Baji Mokhtar":
                addOption(citySelect, "برج باجي مختار (Bordj Baji Mokhtar)");

                break;
				
				 case "51 Ouled Djellal":
                addOption(citySelect, "أولاد جلال (Ouled Djellal)");

                break;
				
				 case "52 Béni Abbès":
               addOption(citySelect, "بني عباس (Béni Abbès)");

                break;
				
				 case "53 Aïn Salah":
addOption(citySelect, "عين صالح (Aïn Salah)");

                break;
				
				 case "54 In Guezzam":
               addOption(citySelect, "إن قزام (In Guezzam)");

                break;
				
				 case "55 Touggourt":
               addOption(citySelect, "تقرت (Touggourt)");

                break;
				
				 case "56 Djanet":
               addOption(citySelect, "جانت (Djanet)");

                break;
				
				 case "57 El MGhair":
               addOption(citySelect, "المغير (El M'Ghair)");

                break;
				
				 case "58 El Menia":
                addOption(citySelect, "المنيعة (El Menia)");

                break;
				
				
				
				
            // يمكنك إضافة باقي الولايات والبلديات هنا
            default:
                addOption(citySelect, "يرجى اختيار ولاية");
                break;
        }
        calculateTotalPrice();
    }

    function addOption(selectElement, optionText) {
        var option = document.createElement("option");
        option.text = optionText;
        selectElement.add(option);
    }

    function calculateTotalPrice() {
        var state = document.getElementById("state").value;
        var shippingPrice;

       switch (state) {
    case "01 - Adrar":
        shippingPrice = 1050;
        break;
    case "02 Chlef":
        shippingPrice = 600;
        break;
    case "03 Laghouat":
        shippingPrice = 700;
        break;
    case "04 Oum El Bouaghi":
        shippingPrice = 600;
        break;
    case "05 Batna":
        shippingPrice = 600;
        break;
    case "06 Béjaïa":
        shippingPrice = 600;
        break;
    case "07 Biskra":
        shippingPrice = 700;
        break;
    case "08 Bechar":
        shippingPrice = 1050;
        break;
    case "09 Blida":
        shippingPrice = 550;
        break;
    case "10 Bouira":
        shippingPrice = 600;
        break;
    case "11 Tamanrasset":
        shippingPrice = 1450;
        break;
    case "12 Tébessa":
        shippingPrice = 700;
        break;
    case "13 Tlemcene":
        shippingPrice = 600;
        break;
    case "14 Tiaret":
        shippingPrice = 600;
        break;
    case "15 Tizi Ouzou":
        shippingPrice = 600;
        break;
    case "16 Alger":
        shippingPrice = 450;
        break;
    case "17 Djelfa":
        shippingPrice = 700;
        break;
    case "18 Jijel":
        shippingPrice = 600;
        break;
    case "19 Sétif":
        shippingPrice = 600;
        break;
    case "20 Saïda":
        shippingPrice = 600;
        break;
    case "21 Skikda":
        shippingPrice = 600;
        break;
    case "22 Sidi Bel Abbès":
        shippingPrice = 600;
        break;
    case "23 Annaba":
        shippingPrice = 600;
        break;
    case "24 Guelma":
        shippingPrice = 600;
        break;
    case "25 Constantine":
        shippingPrice = 600;
        break;
    case "26 Médéa":
        shippingPrice = 600;
        break;
    case "27 Mostaganem":
        shippingPrice = 600;
        break;
    case "28 MSila":
        shippingPrice = 600;
        break;
    case "29 Mascara":
        shippingPrice = 600;
        break;
    case "30 Ouargla":
        shippingPrice = 700;
        break;
    case "31 Oran":
        shippingPrice = 600;
        break;
    case "32 El Bayadh":
        shippingPrice = 1050;
        break;
    case "33 Illizi":
        shippingPrice = 1450;
        break;
    case "34 Bordj Bou Arreridj":
        shippingPrice = 600;
        break;
    case "35 Boumerdes":
        shippingPrice = 550;
        break;
    case "36 El Tarf":
        shippingPrice = 600;
        break;
    case "37 Tindouf":
        shippingPrice = 1450;
        break;
    case "38 Tissemsilt":
        shippingPrice = 600;
        break;
    case "39 Eloued":
        shippingPrice = 700;
        break;
    case "40 Khenchela":
        shippingPrice = 600;
        break;
    case "41 Souk Ahras":
        shippingPrice = 600;
        break;
    case "42 Tipaza":
        shippingPrice = 550;
        break;
    case "43 Mila":
        shippingPrice = 600;
        break;
    case "44 Aïn Defla":
        shippingPrice = 600;
        break;
    case "45 Naâma":
        shippingPrice = 1050;
        break;
    case "46 Aïn Témouchent":
        shippingPrice = 600;
        break;
    case "47 Ghardaïa":
        shippingPrice = 700;
        break;
    case "48 Relizane":
        shippingPrice = 600;
        break;
		case "49 Timimoun":
        shippingPrice = 1050;
        break;
		case "50 Bordj Baji Mokhtar":
        shippingPrice = 1050;
        break;
		case "51 Ouled Djellal":
        shippingPrice = 700;
        break;
		case "52 Béni Abbès":
        shippingPrice = 1050;
        break;
		case "53 Aïn Salah":
        shippingPrice = 1450;
        break;
		case "54 In Guezzam":
        shippingPrice = 700;
        break;
		case "55 Touggourt":
        shippingPrice = 700;
        break;
		case "56 Djanet":
        shippingPrice = 1450;
        break;
		case "57 El MGhair":
        shippingPrice = 700;
        break;
		case "58 El Menia":
        shippingPrice = 700;
        break;
		
    default:
        shippingPrice = 0; // تعيين سعر الشحن للولايات غير المدرجة
        break;
}


        var totalPrice = 500 + shippingPrice;
        document.getElementById("shippingPrice").innerText = shippingPrice + " دج";
        document.getElementById("totalPrice").innerText = totalPrice + " دج";
    }