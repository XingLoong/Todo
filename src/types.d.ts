type TodoData = {
	text: string;
	id?: string;
	done?: boolean;
};

type AddTodo = (newTodo: string) => void;
