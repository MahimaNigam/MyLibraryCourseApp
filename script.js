var courseList={
    courses:[],
    displayCources:function(){
        if(this.courses.length===0){
            console.log('There is no courses in the list')
        }
        else{
            for(i=0;i<this.courses.length;i++){
                console.log(this.courses[i]);
            }
        }
    },
    addCourse:function(courseName, totalLectures, trainer, author, description){
        this.courses.push({
            courseTitle: courseName,
            courseSize: totalLectures,
            courseTrainer: trainer,
            courseAuthor:author,
            courseDescription: description
        });
        this.displayCources();
    },
    changeCourseName:function(position, courseName){
        this.courses[position].courseTitle=courseName;
        this.displayCources();
    },
    changeCourseSize:function(position, totalLectures){
        this.courses[position].courseSize=totalLectures;
        this.displayCources();
    },
    // changeCourseTrainer:function(position, trainer){
    //     this.courses[position].courseTrainer=trainer;
    //     this.displayCources();
    // },
    // changeCourseAuthor:function(position, author){
    //     this.courses[position].courseAuthor=author;
    //     this.displayCources();
    // },
    changeCourseDescription:function(position, description){
        this.courses[position].courseDescription=description;
        this.displayCources();
    },

    deleteCourse:function(position){
        this.courses.splice(position,1);
        this.displayCources();
    }

}

var handler={
    addCourse:function(){
        var courseName=document.getElementById('courseName').value;
        var courseSize=document.getElementById('courseSize').value;
        var courseTrainer=document.getElementById('courseTrainer').value;
        var courseAuthor=document.getElementById('courseAuthor').value;
        var courseDescription=document.getElementById('courseDescription').value;
        courseList.addCourse(courseName, courseSize, courseTrainer, courseAuthor, courseDescription);
        view.displayCources();
        document.getElementById('courseName').value="";
        document.getElementById('courseSize').value="";
        document.getElementById('courseTrainer').value="";
        document.getElementById('courseAuthor').value="";
        document.getElementById('courseDescription').value='';

    },

    changeCourseName:function(){
        var position=document.getElementById('position').value;
        var courseTitle=document.getElementById('courseTitle').value;
        courseList.changeCourseName(position,courseTitle)
        view.displayCources();
        document.getElementById('position').value='';
        document.getElementById('courseTitle').value='';
    },

    changeCourseSize:function(){
        var position2=document.getElementById('position2').value;
        var noOfLectures=document.getElementById('noOfLectures').value;
        courseList.changeCourseSize(position2,noOfLectures)
        view.displayCources();
        document.getElementById('position2').value='';
        document.getElementById('noOfLectures').value='';
    },

    changeCourseDescription:function(){
        var position3=document.getElementById('position3').value;
        var Description=document.getElementById('Description').value;
        courseList.changeCourseDescription(position3,Description)
        view.displayCources();
        document.getElementById('position3').value='';
        document.getElementById('Description').value='';
    },

    deleteCourse:function(position){
        courseList.deleteCourse(position);
        view.displayCources();
    }
}

var view={
    displayCources:function(){
        var tbody=document.querySelector('tbody');
        tbody.innerHTML='';
        for(var i=0;i<courseList.courses.length;i++){
            var tr=document.createElement('tr');
            var course= courseList.courses[i];
            var tdName=document.createElement('td');
            var tdSize=document.createElement('td');
            var tdTrainer=document.createElement('td');
            var tdAuthor=document.createElement('td');
            var tdDesc=document.createElement('td');
            var tdDelete=document.createElement('td');
            var tdCopy=document.createElement('td')
            tdName.textContent=course.courseTitle;
            tdSize.textContent=course.courseSize;
            tdTrainer.textContent=course.courseTrainer;
            tdAuthor.textContent=course.courseAuthor;
            tdDesc.textContent=course.courseDescription;
            tdDelete.append(this.createDeleteButton());
            tdDelete.id=i;
            tr.appendChild(tdName);
            tr.appendChild(tdSize);
            tr.appendChild(tdTrainer);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdDesc);
            tr.appendChild(tdDelete);
            tbody.appendChild(tr);
        }
    },

    createDeleteButton:function(){
        var deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.className='deleteCourse';
        deleteButton.target=this.setUpEventListener();
        return deleteButton;
    },

    setUpEventListener:function(){
        var tbody=document.querySelector('tbody');
        tbody.addEventListener('click',function(event){
            // get the target element that is clicked
            var elementClicked=event.target;

            //check if element clicked is deleteIssue button
            if(elementClicked.className==='deleteCourse'){
            // call handlers deleteIssue method here
                handler.deleteCourse(parseInt(elementClicked.parentNode.id));
            }
        })
    }
}
