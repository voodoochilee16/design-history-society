<script>
    import {Datepicker} from "/Users/esad-idea/Documents/pauloferreira@esadidea/directus_projects/design history society/dhs_test/node_modules/svelte-calendar"
    import dayjs from "dayjs";
    import {InlineCalendar} from "svelte-calendar";

    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';

    let plugins = [TimeGrid];
    let options = {
        view: "timeGridWeek",
        events : [
            
        ]

    };
    const theme = {
        calendar: {
            with: "600px",
            shadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
        }
    }

    const today = new Date()
    const tomorrow = dayjs().add(1, "day").toDate();
</script>



<section class="agenda">
    <header><h1>AGENDA</h1></header>
    <div class="datas">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum tenetur reiciendis porro accusamus voluptas magnam aut omnis nemo aliquid? Similique hic culpa perferendis voluptatum blanditiis quia dolores, incidunt nemo eligendi?
    </div>
    <div class="calendarapp">


        <InlineCalendar {theme}></InlineCalendar>



    </div>

  
</section>

<style>
    .agenda{
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        margin-bottom: 3rem;
    }

</style>