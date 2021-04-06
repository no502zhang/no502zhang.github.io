# 使用Kotlin开发SpringBoot应用

要使用Kotlin开发SpringBoot应用,首先得知道如何创建SpringBoot应用.如何创建SpringBoot可以参照[SpringBoot官网](https://projects.spring.io/spring-boot/).


若要手动配置, 只需要注意以下几点.

为了能打成jar包,加入maven-SpringBoot插件,以及将kotlin源码文件夹加入编译目录

    <build>
        <!-- 将kotlin源码文件夹加入编译目录 -->
        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>
        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>
        <!-- 为了能打成jar包,加入maven-SpringBoot插件 -->
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>


然后增加Kotlin依赖

    <properties>
        <kotlin.version>1.2.30</kotlin.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.jetbrains.kotlin</groupId>
            <artifactId>kotlin-stdlib</artifactId>
            <version>${kotlin.version}</version>
        </dependency>
        <dependency>
			<groupId>org.jetbrains.kotlin</groupId>
			<artifactId>kotlin-reflect</artifactId>
            <version>${kotlin.version}</version>
		</dependency>
    </dependencies>

要编译Kotlin模块和源码，需要使用kotlin-maven-plugin插件

    <plugin>
        <artifactId>kotlin-maven-plugin</artifactId>
        <groupId>org.jetbrains.kotlin</groupId>
        <version>${kotlin.version}</version>
        <executions>
            <execution>
                <id>compile</id>
                <goals> <goal>compile</goal> </goals>
            </execution>
            <execution>
                <id>test-compile</id>
                <goals> <goal>test-compile</goal> </goals>
            </execution>
        </executions>
    </plugin>
