---
sidebar_label: 'Project Description'
sidebar_position: 1
---

# UAchado

## Brief Project Explanation

The "UAchado" is a project designed for the University of Aveiro community. Its primary goal is to revolutionize the traditional lost and found process by providing a user-friendly, digital solution. This innovative platform will serve as a central repository where every item recovered and safely stored within the university premises is meticulously documented and made easily accessible to its rightful owners. 

By harnessing the power of technology, this initiative not only enhances the efficiency of the lost and found system but also ensures that students, faculty, and staff can conveniently reclaim their belongings through a user-friendly interface, ultimately fostering a stronger sense of community and accountability within the university campus. This project is set to streamline and modernize the process of reuniting individuals with their lost items, reducing frustration, and enhancing the overall campus experience.



**Github Organization:** https://github.com/UAchado


## Architecture

![UAchado Architecture](/img/arquitetura.png)


## Tecnologies

| Module | Tech |
| --- | --- |
| UI's | React + Docker |
| SafePoints API | fastAPI + Docker + mySQL |
| Report API | fastAPI + Docker + mySQL |
| Inventory API | fastAPI + Docker + mySQL + AWS S3 |
| Idp | AWS Cognito |
| System Logs | AWS Cloudwatch |