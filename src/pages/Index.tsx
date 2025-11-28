import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import ActivityCard from "@/components/ActivityCard";

const Index = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6 overflow-auto">
          {/* Active Tasks Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Активные Задачи
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <TaskCard
                title='Проект "Экология Будущего"'
                progress={75}
                buttonText="Открыть"
                buttonVariant="accent"
              />
              <TaskCard
                title="Онлайн-Хакатон"
                deadline="2 дня"
                buttonText="Участвовать"
              />
              <TaskCard
                title="Опмсаив"
                badge="Новые заявки"
                buttonText="Участвовать"
              />
              <TaskCard
                title="Волонтерский центр"
                location="Новые заявки"
                buttonText="Подробнее"
                buttonVariant="accent"
              />
            </div>
          </section>

          {/* My Activities Section */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Мои Активисты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ActivityCard
                icon="chat"
                title="Чат с Наставником"
                subtitle="Новое сообщение"
                buttonText="Открыть чат"
              />
              <ActivityCard
                icon="trophy"
                title="Чат с Наставником"
                subtitle="3 новых значка"
                buttonText="Посмотреть"
              />
              <ActivityCard
                icon="award"
                title="Мои Достижения"
                subtitle="3 новых значка"
                buttonText="Посмотреть"
              />
              <ActivityCard
                icon="trophy"
                title="Рейтинг"
                subtitle="Топ 10%"
                buttonText="Подробнее"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
