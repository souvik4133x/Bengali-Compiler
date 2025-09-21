import React, { useState } from 'react';
import '../styles/DocsPage.css';

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('input');
const documentationSections = [
  { id: 'input', title: 'ইনপুট নেওয়া', content: 'ব্যবহারকারীর কাছ থেকে ইনপুট নেওয়ার জন্য inputnao() ফাংশন ব্যবহার করা হয়।' },
  { id: 'output', title: 'আউটপুট', content: 'প্রোগ্রামের ফলাফল প্রদর্শনের জন্য bol() ফাংশন ব্যবহার করা হয়।' },
  { id: 'niyomaboli', title: 'নিয়মাবলী', content: 'সন্দেশLang-এ ইন্ডেন্টেশন গুরুত্বপূর্ণ। শর্ত, লুপ এবং ব্লকগুলো সঠিকভাবে ইন্ডেন্ট করতে হবে।' },
  { id: 'variables', title: 'ভেরিয়েবল', content: 'ভেরিয়েবল ডিক্লেয়ার এবং ডাটা টাইপ' },
  { id: 'conditions', title: 'কন্ডিশনাল স্টেটমেন্ট', content: 'শর্তসাপেক্ষ বিবৃতি' },
  { id: 'loops', title: 'লুপ', content: 'while এবং for লুপ' },
  { id: 'functions', title: 'ফাংশন', content: 'ফাংশন তৈরি এবং ব্যবহার' },
  { id: 'collections', title: 'কালেকশন', content: 'লিস্ট এবং ডিকশনারি' },
  { id: 'oop', title: 'OOP কনসেপ্ট', content: 'ক্লাস এবং অবজেক্ট' },
  { id: 'control', title: 'কন্ট্রোল ফ্লো', content: 'ব্রেক, কন্টিনিউ এবং ইম্পোর্ট' },
  { id: 'examples', title: 'উদাহরণ', content: 'সম্পূর্ণ কোড উদাহরণ' }
];

const renderContent = () => {
  switch(activeSection) {
    
case 'input':
  return (
    <div>
    <h2>ইনপুট নেওয়া</h2>
    <p>সন্দেশLang-এ ব্যবহারকারীর কাছ থেকে ইনপুট নেওয়া যায় <code>inputnao()</code> ফাংশনের মাধ্যমে এবং <code>sonkha()</code> ব্যবহার করে পূর্ণসংখ্যা (integer) কে স্ট্রিং-এ রূপান্তর করা যায়।</p>

    <div className="code-block">
      <pre>{`# ব্যবহারকারীর কাছ থেকে নাম নেওয়া
nam = inputnao("তোমার নাম লিখো: ")
bol("হ্যালো", nam)

# পূর্ণসংখ্যা স্ট্রিং-এ রূপান্তর করা
boyos = inputnao()
boyos_integar = sonkha(boyos)
bol("তোমার বয়স:", boyos_integar)`}</pre>
    </div>
  </div>
  );

case 'output':
  return (
    <div>
      <h2>আউটপুট</h2>
      <p>নিচে উদাহরণ আউটপুট দেখানো হলো:</p>

      <div className="code-block">
        <pre>{`nam= "souvik"
bol(nam)`}</pre>
      </div>
    </div>
  );

  case 'niyomaboli':
  return (
    <div>
      <h2>ইন্ডেন্টেশন</h2>
      <p>সন্দেশLang-এ পাইথন-এর মতো ইন্ডেন্টেশন গুরুত্বপূর্ণ। প্রতিটি ব্লক সঠিকভাবে ইন্ডেন্ট করা আবশ্যক।</p>

      <h3>উদাহরণ: শর্ত ও লুপ</h3>
      <div className="code-block">
        <pre>{`jodi ৫ > ৩:
    bol("৫ বড় ৩-এর চেয়ে")
nahole:
    bol("৫ ছোট বা সমান ৩-এর")`}</pre>
      </div>

      
    </div>
  );


    case 'variables':
      return (
        <div>
          <h2>ভেরিয়েবল এবং ডাটা টাইপ</h2>
          <p>ভেরিয়েবল ডিক্লেয়ার করার পদ্ধতি:</p>
          <div className="code-block">
            <pre>{`# ভেরিয়েবল ডিক্লেয়ার
nam = "Sandesh"
boyosh = 25
height = 5.9
sokriyo = sotti

bol(nam)
bol(boyosh)
bol(height)
bol(sokriyo)

# বুলিয়ান ভ্যালু
sotti_value = sotti
mithya_value = mithya
bol("Sotti:", sotti_value)
bol("Mithya:", mithya_value)`}</pre>
          </div>
        </div>
      );

    case 'conditions':
      return (
        <div>
          <h2>কন্ডিশনাল স্টেটমেন্ট</h2>
          <p>শর্তসাপেক্ষ লজিক:</p>
          <div className="code-block">
            <pre>{`# বেসিক if-else
boyosh=15
jodi boyosh >= 18:
    bol("Progotboyosh")
nahole:
    bol("Oprogotboyosh")

# একাধিক কন্ডিশন
number=65
jodi number >= 80:
    bol("A+")
noyto number >= 70:
    bol("A")
noyto number >= 60:
    bol("A-")
nahole:
    bol("F")

# লজিক্যাল অপারেটর
boyosh=19
sokriyo=mithya
jodi (boyosh >= 18) ebong (sokriyo == sotti):
    bol("You can vote")
noyto (boyosh >= 65):
    bol("Senior citizen")
nahole:
    bol("Cannot vote")`}</pre>
          </div>
          <div className="explanation-box">
            <h4>কীওয়ার্ড ব্যাখ্যা:</h4>
            <ul>
              <li><strong>jodi</strong> = if (যদি)</li>
              <li><strong>othoba</strong> = elif (অথবা যদি) - একাধিক শর্তের জন্য</li>
              <li><strong>nahole</strong> = else (নাহলে) - শেষ বিকল্প</li>
              <li><strong>ebong</strong> = and (এবং) - দুটি শর্ত সত্য হতে হবে</li>
              <li><strong>othoba</strong> = or (অথবা) - যেকোন একটি শর্ত সত্য হলেই হবে</li>
            </ul>
          </div>
        </div>
      );

    case 'loops':
      return (
        <div>
          <h2>লুপ</h2>
          <p>লুপিং:</p>
          <div className="code-block">
            <pre>{`# while লুপ
count = 0
jotokkhon count < 5:
    bol(count)
    count = count + 1

# for লুপ range এর সাথে
bol("Numbers 1 to 5:")
prottek i er jonno(1, 6):
    bol(i)

# লিস্ট through লুপ
numbers = [10, 20, 30, 40, 50]
bol("List elements:")
prottek num er numbers:
    bol(num)

# লুপ কন্ট্রোল
prottek i er jonno(10):
    jodi i == 5:
        thamo  # break
    jodi i % 2 == 0:
        cholo  # continue
    bol(i)`}</pre>
          </div>
        </div>
      );

    case 'functions':
      return (
        <div>
          <h2>ফাংশন</h2>
          <p>ফাংশন ডেফিনিশন:</p>
          <div className="code-block">
            <pre>{`# ফাংশন ডেফিনিশন
kaj jog_koro(a, b):
    phiriye_dau a + b

kaj borgokoro(number):
    phiriye_dau number * number

kaj check_even_odd(n):
    jodi n % 2 == 0:
        phiriye_dau "Even"
    nahole:
        phiriye_dau "Odd"

# ফাংশন কল
result = jog_koro(5, 3)
bol("5 + 3 =", result)

bol("4^2 =", borgokoro(4))
bol("7 is", check_even_odd(7))

# রিকার্সিভ ফাংশন
kaj factorial(n):
    jodi n == 0:
        phiriye_dau 1
    nahole:
        phiriye_dau n * factorial(n-1)

bol("5! =", factorial(5))`}</pre>
          </div>
        </div>
      );

    case 'collections':
      return (
        <div>
          <h2>কালেকশন</h2>
          <p>লিস্ট এবং ডিকশনারি:</p>
          <div className="code-block">
            <pre>{`# লিস্ট অপারেশন
numbers = talika([1, 2, 3, 4, 5])
names = talika(["Alice", "Bob", "Charlie"])

bol("Numbers:", numbers)
bol("Names:", names)

# লিস্ট মেথড
numbers.append(6)
bol("After append:", numbers)

bol("First element:", numbers[0])
bol("List length:", len(numbers))

# ডিকশনারি অপারেশন
student = boi({
    "nam": "Rahim",
    "boyosh": 20,
    "department": "CSE"
})

bol("Student name:", student["nam"])
bol("Student age:", student["boyosh"])

# ডিকশনারি মেথড
student["grade"] = "A"
bol("Student details:", student)`}</pre>
          </div>
        </div>
      );

    case 'oop':
      return (
        <div>
          <h2>অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং</h2>
          <p>ক্লাস এবং অবজেক্ট:</p>
          <div className="code-block">
            <pre>{`# ক্লাস ডেফিনিশন
shreni Student:
    kaj suru(etar, nam, boyosh):
        etar.nam = nam
        etar.boyosh = boyosh
    
    kaj introduce(etar):
        bol("Amar nam", etar.nam, "amar boyosh", etar.boyosh)

# অবজেক্ট ক্রিয়েট
student1 = Student("Alice", 20)
student2 = Student("Bob", 22)

student1.introduce()
student2.introduce()

# ইনহেরিটেন্স
shreni Teacher(Student):
    kaj suru(etar, nam, boyosh, subject):
        super().suru(nam, boyosh)
        etar.subject = subject
    
    kaj teach(etar):
        bol(etar.nam, "teaches", etar.subject)

teacher = Teacher("Mr. Smith", 35, "Mathematics")
teacher.introduce()
teacher.teach()`}</pre>
          </div>
        </div>
      );

    case 'control':
      return (
        <div>
          <h2>কন্ট্রোল ফ্লো </h2>
          <p>এডভান্সড কন্ট্রোল ফ্লো:</p>
          <div className="code-block">
            <pre>{`# ব্রেক এবং কন্টিনিউ
prottek i er jonno(10):
    jodi i == 5:
        thamo  # break the loop
    jodi i % 2 == 0:
        cholo  # continue to next iteration
    bol(i)`}</pre>
          </div>
        </div>
      );

    case 'examples':
      return (
        <div>
          <h2>সম্পূর্ণ উদাহরণ</h2>
          <p>সম্পূর্ণ কাজের উদাহরণ:</p>
          <div className="code-block">
            <pre>{`# উদাহরণ ১: ফিবোনাচি সিরিজ
kaj fibonacci(limit):
    a, b = 0, 1
    bol("Fibonacci series:")
    jotokkhon a <= limit:
        bol(a)
        a, b = b, a + b

fibonacci(20)



# উদাহরণ ২: স্টুডেন্ট ম্যানেজমেন্ট সিস্টেম
shreni StudentManager:
    kaj suru(etar):
        etar.students = talika()
    
    kaj add_student(etar, nam, boyosh):
        etar.students.append(boi({"nam": nam, "boyosh": boyosh}))
    
    kaj show_students(etar):
        bol("All students:")
        prottek student er etar.students:
            bol(student["nam"], "-", student["boyosh"], "years old")

manager = StudentManager()
manager.add_student("Alice", 20)
manager.add_student("Bob", 22)
manager.add_student("Charlie", 21)
manager.show_students()`}</pre>
          </div>
        </div>
      );

    default:
      return <div>একটি সেকশন সিলেক্ট করুন</div>;
  }
};
  return (
    <div className="docs-page">
      <div className="docs-container">
        <div className="docs-sidebar">
          <h3 className="sidebar-title">সন্দেশLang ডকুমেন্টেশন</h3>
          <ul className="sidebar-menu">
            {documentationSections.map((section) => (
              <li key={section.id}>
                <button
                  className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="docs-content">
          
          
          <div className="content-body">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;