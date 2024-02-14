/**
 * @class
 * @classdesc 사람의 정보를 저장할 수 있는 클래스
 * @author 혀뉴찡
 * @example 
 * new Person("홍길동", 10)
 */
class Person{
    /**
     * @param {string} name 이름
     * @param {number} age 나이
     */
    constructor(name, age){
        this.name = name;
        this.age = age;
        /** 
         * @member {string} 
         * @description 성별
        */
        this.sex;
    }

    /**
     * @returns {string} this.name
     * @description 이름을 반환
     * @example
     * let p = new Person("홍길동", 10);
     * console.log(p.getName());
     */
    getName(){
        return this.name;
    }

    /**
     * @returns {string} this.age
     * @description 나이를 반환
     */
    getAge(){
        return this.age;
    }

    /**
     * @static
     * @description 이름과 나이를 출력하는 함수
     */
    static showPrint(){
        console.log(`${this.name} : ${this.age}`);
    }
}